import Event from '../models/Event.js';
import { validationResult } from 'express-validator';

export const listEvents = async (req, res) => {
  const items = await Event.find().sort({ date: -1 });
  res.json(items);
};

export const getEvent = async (req, res) => {
  const item = await Event.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

export const createEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const item = await Event.create(req.body);
  res.status(201).json(item);
};

export const updateEvent = async (req, res) => {
  const item = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

export const deleteEvent = async (req, res) => {
  const item = await Event.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
};
