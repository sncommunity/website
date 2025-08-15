import Member from '../models/Member.js';
import { validationResult } from 'express-validator';

export const listMembers = async (req, res) => {
  const items = await Member.find().sort({ order: 1, createdAt: -1 });
  res.json(items);
};

export const createMember = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const item = await Member.create(req.body);
  res.status(201).json(item);
};

export const updateMember = async (req, res) => {
  const item = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

export const deleteMember = async (req, res) => {
  const item = await Member.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
};
