import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const dbURI = process.env.DB_URI ?? "";
    await mongoose.connect(dbURI);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
}