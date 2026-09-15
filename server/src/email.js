import { Resend } from "resend";

let client = null;
function getClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY is not set. Copy server/.env.example to server/.env and fill it in — see README.md."
    );
  }
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

export async function sendOtpEmail(toEmail, code) {
  const from = process.env.EMAIL_FROM || "CodeSprint <onboarding@resend.dev>";

  const text = `CodeSprint - Email Verification

Your verification code is: ${code}

This code will expire in 5 minutes.

If you did not create a CodeSprint account, please ignore this email.`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; color: #12151C;">
      <p style="font-family: 'Courier New', monospace; font-weight: 700; font-size: 15px; letter-spacing: -0.01em; margin: 0 0 24px;">
        <span style="display:inline-block;width:10px;height:10px;background:#5B8DEF;border-radius:2px;margin-right:8px;"></span>drillbyte
      </p>
      <h1 style="font-size: 18px; margin: 0 0 8px;">Verify your email</h1>
      <p style="font-size: 14px; color: #444; line-height: 1.6; margin: 0 0 20px;">
        Your verification code is:
      </p>
      <p style="font-family: 'Courier New', monospace; font-size: 32px; font-weight: 700; letter-spacing: 0.2em; margin: 0 0 20px;">
        ${code}
      </p>
      <p style="font-size: 13px; color: #666; line-height: 1.6; margin: 0 0 4px;">
        This code will expire in 5 minutes.
      </p>
      <p style="font-size: 13px; color: #888; line-height: 1.6; margin: 24px 0 0;">
        If you did not create a CodeSprint account, please ignore this email.
      </p>
    </div>
  `;

  const resend = getClient();
  const { data, error } = await resend.emails.send({
    from,
    to: toEmail,
    subject: "CodeSprint - Email Verification",
    text,
    html,
  });

  if (error) {
    throw new Error(`Resend failed to send the email: ${error.message || JSON.stringify(error)}`);
  }
  return data;
}
