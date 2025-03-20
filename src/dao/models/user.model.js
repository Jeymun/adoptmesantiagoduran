import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },
    pets: { type: Array, default: [] },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
