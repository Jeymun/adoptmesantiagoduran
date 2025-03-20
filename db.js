import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/petsusers', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connectDB;
