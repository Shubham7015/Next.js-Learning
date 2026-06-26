import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/notes-app");
    console.log("DB connected");
  } catch (error) {
    throw new Error(error.message);
  }
}
