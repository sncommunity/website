import { Router } from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Upload endpoint: accepts field "file". If CLOUDINARY_URL set, uploads and returns secure URL.
router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  if (!process.env.CLOUDINARY_URL) return res.status(400).json({ error: 'Cloudinary not configured' });

  try {
    const b64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    const result = await cloudinary.uploader.upload(b64, { folder: 'snc' });
    res.json({ url: result.secure_url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
