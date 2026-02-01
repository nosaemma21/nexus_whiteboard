import mongoose from "mongoose";
import logger from "./logger.js";
const mongoConnect = async (url) => {
    try {
        //checking if we're connected 👍
        if (mongoose.connection.readyState >= 1)
            return;
        mongoose.connect(url); //connects ✅
        logger.info("Connected to MongoDB 🍃");
    }
    catch (err) {
        logger.error("Failed to connect to MongoDB 💥💥💥");
        process.exit(1); //for the future dev: This kills the process
    }
};
export default mongoConnect;
//# sourceMappingURL=mongoConnect.js.map