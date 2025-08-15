import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import eventsRouter from './routes/events.js';
import membersRouter from './routes/members.js';
import contactRouter from './routes/contact.js';
import uploadRouter from './routes/upload.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

connectDB();

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/events', eventsRouter);
app.use('/api/members', membersRouter);
app.use('/api/contact', contactRouter);
app.use('/api/upload', uploadRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
