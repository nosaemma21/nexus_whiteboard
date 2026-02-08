import type { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError.js";
import logger from "../utils/logger.js";
import type { ErrorResponse } from "../interfaces/errorResponse.js";

const errorHandlingMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode: number = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || "Internal Server Error!!!";

  // Log only unexpected errors
  if (!(err instanceof AppError && err.isOperational)) {
    logger.error(err);
  }

  const response: ErrorResponse = { status: "error", message };

  //Displaying stack depending on dev environment
  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack; //considering making err.stack optional here cuz of interface
  }
  res.status(statusCode).json(response);
};

export default errorHandlingMiddleware;
