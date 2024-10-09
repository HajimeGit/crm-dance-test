import mongoose from 'mongoose';

export const connectDB = async (): Promise<typeof mongoose> => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
