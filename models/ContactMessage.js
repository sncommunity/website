import mongoose from 'mongoose';

const ContactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  reason: { type: String, enum: ['Join', 'Language School', 'Suggestion', 'Other'], default: 'Join' },
  message: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('ContactMessage', ContactMessageSchema);
