
import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { getUser, upsertUser } from "./db.js";
import { generateOtp, OTP_EXPIRY_MS, RESEND_COOLDOWN_MS } from "./otp.js";
import { sendOtpEmail } from "./email.js";

const app = express();

const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET;

const CORS_ORIGIN = (
  process.env.CORS_ORIGIN || "http://localhost:5173"
)
  .split(",")
  .map((s) => s.trim());

// --------------------------------------------------
// Production safety
// --------------------------------------------------

if (!JWT_SECRET) {
  throw new Error(
    "JWT_SECRET is not set. Add it to your environment variables."
  );
}

// --------------------------------------------------
// Middleware
// --------------------------------------------------

app.use(
  cors({
    origin: CORS_ORIGIN,
  })
);

app.use(express.json());

// --------------------------------------------------
// Helpers
// --------------------------------------------------

function signToken(user) {
  return jwt.sign(
    {
      email: user.email,
      name: user.name || null,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

function isValidEmail(email) {
  return (
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  );
}

// --------------------------------------------------
// POST /api/signup
// --------------------------------------------------

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !name.trim()) {
      return res.status(400).json({
        error: "Name is required.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Enter a valid email address.",
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters.",
      });
    }

    const existing = await getUser(email);

    if (existing && existing.verified) {
      return res.status(409).json({
        error: "An account with this email already exists.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const otp = generateOtp();

    const now = Date.now();

    await upsertUser(email, {
      name: name.trim(),
      passwordHash,
      verified: false,
      otpHash: await bcrypt.hash(otp, 10),
      otpExpiresAt: now + OTP_EXPIRY_MS,
      otpLastSentAt: now,
    });

    await sendOtpEmail(email.trim(), otp);

    return res.json({
      ok: true,
    });
  } catch (err) {
    console.error("[signup]", err);

    return res.status(500).json({
      error:
        "Something went wrong sending the verification email. Check the server logs.",
    });
  }
});

// --------------------------------------------------
// POST /api/resend-otp
// --------------------------------------------------

app.post("/api/resend-otp", async (req, res) => {
  try {
    const { email } = req.body || {};

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Enter a valid email address.",
      });
    }

    const user = await getUser(email);

    if (!user) {
      return res.status(404).json({
        error: "No pending signup for this email.",
      });
    }

    if (user.verified) {
      return res.status(409).json({
        error: "This email is already verified. Try logging in.",
      });
    }

    const now = Date.now();

    const elapsed = now - (user.otpLastSentAt || 0);

    if (elapsed < RESEND_COOLDOWN_MS) {
      const secondsRemaining = Math.ceil(
        (RESEND_COOLDOWN_MS - elapsed) / 1000
      );

      return res.status(429).json({
        error: `Please wait ${secondsRemaining}s before requesting another code.`,
        secondsRemaining,
      });
    }

    const otp = generateOtp();

    await upsertUser(email, {
      otpHash: await bcrypt.hash(otp, 10),
      otpExpiresAt: now + OTP_EXPIRY_MS,
      otpLastSentAt: now,
    });

    await sendOtpEmail(email.trim(), otp);

    return res.json({
      ok: true,
    });
  } catch (err) {
    console.error("[resend-otp]", err);

    return res.status(500).json({
      error:
        "Something went wrong sending the verification email. Check the server logs.",
    });
  }
});

// --------------------------------------------------
// POST /api/verify-otp
// --------------------------------------------------

app.post("/api/verify-otp", async (req, res) => {
  try {
    const { email, code } = req.body || {};

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Enter a valid email address.",
      });
    }

    if (!code || typeof code !== "string") {
      return res.status(400).json({
        error: "Enter the 6-digit code.",
      });
    }

    const user = await getUser(email);

    if (!user) {
      return res.status(404).json({
        error: "No pending signup for this email.",
      });
    }

    // Already verified
    if (user.verified) {
      const token = signToken(user);

      return res.json({
        ok: true,
        token,
        email: user.email,
        name: user.name,
      });
    }

    if (!user.otpHash || !user.otpExpiresAt) {
      return res.status(400).json({
        error:
          "No code was requested for this email. Try signing up again.",
      });
    }

    if (Date.now() > user.otpExpiresAt) {
      return res.status(400).json({
        error: "That code expired. Request a new one.",
      });
    }

    const matches = await bcrypt.compare(
      code.trim(),
      user.otpHash
    );

    if (!matches) {
      return res.status(400).json({
        error: "Incorrect code. Double-check and try again.",
      });
    }

    await upsertUser(email, {
      verified: true,
      otpHash: null,
      otpExpiresAt: null,
    });

    const updated = await getUser(email);

    const token = signToken(updated);

    return res.json({
      ok: true,
      token,
      email: updated.email,
      name: updated.name,
    });
  } catch (err) {
    console.error("[verify-otp]", err);

    return res.status(500).json({
      error: "Something went wrong verifying the code.",
    });
  }
});

// --------------------------------------------------
// POST /api/login
// --------------------------------------------------

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Enter a valid email address.",
      });
    }

    if (!password) {
      return res.status(400).json({
        error: "Enter your password.",
      });
    }

    const user = await getUser(email);

    if (!user) {
      return res.status(404).json({
        error: "No account with this email. Try signing up.",
      });
    }

    if (!user.verified) {
      return res.status(403).json({
        error: "This email hasn't been verified yet.",
        needsVerification: true,
      });
    }

    const matches = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!matches) {
      return res.status(401).json({
        error: "Incorrect password.",
      });
    }

    const token = signToken(user);

    return res.json({
      ok: true,
      token,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    console.error("[login]", err);

    return res.status(500).json({
      error: "Something went wrong logging in.",
    });
  }
});

// --------------------------------------------------
// Health check
// --------------------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
  });
});

// --------------------------------------------------
// Start server
// --------------------------------------------------

app.listen(PORT, () => {
  console.log(`CodeSprint backend listening on port ${PORT}`);
});

