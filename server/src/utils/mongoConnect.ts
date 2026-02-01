import mongoose from "mongoose";
import logger from "./logger.js";

const mongoConnect = async (url: string): Promise<void> => {
  try {
    //checking if we're connected 👍
    if (mongoose.connection.readyState >= 1) return;
    mongoose.connect(url); //connects ✅

    logger.info("Connected to MongoDB");
  } catch (err: any) {
    logger.error("Failed to connect to MongoDB");
    process.exit(1); //for the future dev: This kills the process
  }
};

export default mongoConnect;
