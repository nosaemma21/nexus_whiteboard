//THIS LOGGER USES PINO
import { config } from "dotenv";
import pino from "pino";
config();
const isDev = process.env.NODE_ENV?.trim() !== "production";
const logger = isDev
    ? pino({
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname",
            },
        },
    })
    : pino();
export default logger;
//# sourceMappingURL=logger.js.map