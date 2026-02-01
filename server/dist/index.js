import Express from "express";
import { prisma } from "./utils/prismaClient.js";
import mongoConnect from "./utils/mongoConnect.js";
import { config } from "dotenv";
import logger from "./utils/logger.js";
//to use environment variables in the backend
config();
//TODO: ADD RATE LIMITER AND CORS
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const app = Express();
async function bootStrap() {
    try {
        await mongoConnect(MONGO_URI);
        //  await prisma.$connect();
        logger.info("ALL CONNECTIONS STARTED UP SUCCESSFULLY 💡");
        app.listen(5000, () => {
            logger.info(`App is running in port ${PORT}`);
        });
    }
    catch (err) {
        logger.error("FAILED TO START UP 💥💥💥");
        process.exit(1); //no point starting up the process, I guess
    }
}
bootStrap();
//# sourceMappingURL=index.js.map