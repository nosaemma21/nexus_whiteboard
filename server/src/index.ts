import Express from "express";
import { config } from "dotenv";

//----//
import mongoConnect from "./utils/mongoConnect.js";
import logger from "./utils/logger.js";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware.js";
import boardRoutes from "./routes/board.route.js";
import collaboratorRoutes from "./routes/collaborator.route.js";
import userRoutes from "./routes/user.route.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import { NotFoundError } from "./errors/derivedErrors.js";
//----//

//to use environment variables in the backend
config();

//TODO: ADD RATE LIMITER AND CORS

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

const app = Express();

app.use(helmet());
app.use(
  cors({
    origin: "FRONTEND_URL",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//Essentials
app.use(Express.json());

//Adding rate limiters
const generalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

const boardLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: "Slow down! You're creating boards too fast.",
});

//server routes
app.use("api/v1", generalLimiter);
app.use("/api/v1/boards", boardLimiter, boardRoutes);
app.use("/api/v1/collaborators", collaboratorRoutes);
app.use("/api/v1/users", userRoutes);

app.use((_req, _res, next) => {
  //delete later...
  logger.warn("---RESOURCE NOT FOUND---");

  next(new NotFoundError());
});

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
