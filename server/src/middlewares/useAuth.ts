import type { Request, Response, NextFunction } from "express";

import { InternalServerError, NotFoundError } from "../errors/derivedErrors.js";
import AppError from "../errors/AppError.js";

const secret = process.env.JWT_SECRET as string;

if (!secret) throw new InternalServerError("No JWT secret in config");

const useAuthMw = (req: Request, res: Response, next: NextFunction) => {
  //TODO: DEVELOP THIS
  //1) Check req.cookies for token and user
  //2) If there is a user allow access
  //3) If not, deny access
  //4) Move on to the next middleware in the pipeline
  //5) Move on to the error mw in case of failure
};

export default useAuthMw;
