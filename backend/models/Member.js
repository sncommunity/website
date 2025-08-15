import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String },
  photoUrl: { type: String },
  order: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Member', MemberSchema);
