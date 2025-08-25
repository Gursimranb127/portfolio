import type { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, message } = req.body;

  if (!email || !message) return res.status(400).json({ message: "Missing fields" });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from ${email}`,
      text: message,
    });

    res.status(200).json({ message: "Email sent ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed ❌" });
  }
}
