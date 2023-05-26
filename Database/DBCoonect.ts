import mongoose from "mongoose";
import app from "../src/app/app";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI || process.env.MONGO_URI_LOCAL;

const bootstrap = async () => {
  try {
    await mongoose.connect(`${db}`);
    console.log("Connected to MongoDB !!");
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

export default bootstrap;
