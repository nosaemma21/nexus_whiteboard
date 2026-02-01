import Express from "express";

import mongoConnect from "./utils/mongoConnect.js";
import { config } from "dotenv";
import logger from "./utils/logger.js";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware.js";

//to use environment variables in the backend
config();

//TODO: ADD RATE LIMITER AND CORS

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

const app = Express();

//Essentials
app.use(Express.json());

//error handling
app.use(errorHandlingMiddleware);

async function bootStrap() {
  try {
    await mongoConnect(MONGO_URI);
    //  await prisma.$connect();

    logger.info("---ALL CONNECTIONS STARTED UP SUCCESSFULLY---");
    app.listen(5000, () => {
      logger.info(`App is running in port ${PORT}...`);
    });
  } catch (err: any) {
    logger.error("---FAILED TO START UP---");
    process.exit(1); //no point starting up the process, I guess
  }
}

bootStrap();
