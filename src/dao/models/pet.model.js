import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: String,
    species: { type: String, enum: ["dog", "cat"] },
});

const PetModel = mongoose.model("Pet", petSchema);
export default PetModel;
