import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { getUser, upsertUser } from "./db.js";

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

    // Validate name
    if (!name || !name.trim()) {
      return res.status(400).json({
        error: "Name is required.",
      });
    }

    // Validate email
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Enter a valid email address.",
      });
    }

    // Validate password
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check whether account already exists
    const existing = await getUser(normalizedEmail);

    if (existing) {
      return res.status(409).json({
        error: "An account with this email already exists.",
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create account
    await upsertUser(normalizedEmail, {
      name: name.trim(),
      passwordHash,
      verified: true,
    });

    return res.json({
      ok: true,
    });
  } catch (err) {
    console.error("[signup]", err);

    return res.status(500).json({
      error: "Something went wrong creating your account.",
    });
  }
});

// --------------------------------------------------
// POST /api/login
// --------------------------------------------------

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    // Validate email
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Enter a valid email address.",
      });
    }

    // Validate password
    if (!password) {
      return res.status(400).json({
        error: "Enter your password.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await getUser(normalizedEmail);

    if (!user) {
      return res.status(404).json({
        error: "No account with this email. Try signing up.",
      });
    }

    // Check password
    const matches = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!matches) {
      return res.status(401).json({
        error: "Incorrect password.",
      });
    }

    // Generate JWT
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