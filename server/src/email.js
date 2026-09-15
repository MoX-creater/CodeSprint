import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendOtpEmail(to, otp) {
  await transporter.sendMail({
    from: `"CodeSprint" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Your CodeSprint verification code",

    text: `Your CodeSprint verification code is ${otp}.

This code will expire in 10 minutes.

If you did not create a CodeSprint account, you can ignore this email.`,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto;">
        <h2>CodeSprint</h2>

        <p>Your verification code is:</p>

        <div style="
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 8px;
          padding: 20px;
          background: #f3f4f6;
          text-align: center;
          border-radius: 8px;
        ">
          ${otp}
        </div>

        <p>This code will expire in 10 minutes.</p>

        <p style="color: #666;">
          If you did not create a CodeSprint account,
          you can safely ignore this email.
        </p>
      </div>
    `,
  });
}