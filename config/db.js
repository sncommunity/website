import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn('MONGO_URI not set. Please configure .env');
    return;
  }
  try {
    await mongoose.connect(uri, { dbName: uri.split('/').pop() });
    console.log('MongoDB connected');
  } catch (e) {
    console.error('MongoDB connection error', e.message);
    process.exit(1);
  }
};
