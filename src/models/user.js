import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  age: Number,
  role: { type: String, enum: ['user', 'admin'] },
  pets: [mongoose.Schema.Types.ObjectId], // Referencia a los Pets
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;
