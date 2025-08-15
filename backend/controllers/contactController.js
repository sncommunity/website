import ContactMessage from '../models/ContactMessage.js';
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

export const submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const saved = await ContactMessage.create(req.body);

  // Optional email notification if SMTP configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.EMAIL_FROM) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_FROM,
        subject: `New ${saved.reason} message from ${saved.name}`,
        text: `${saved.name} <${saved.email}> (${saved.phone || 'no phone'}) says:\n\n${saved.message}`
      });
    } catch (e) {
      console.warn('Email send failed:', e.message);
    }
  }

  res.status(201).json({ ok: true });
};
