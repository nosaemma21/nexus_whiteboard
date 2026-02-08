import handleAsync from "express-async-handler";
import type { Request, Response, NextFunction } from "express";

//----//
import prisma from "../utils/prismaClient.js";
import logger from "../utils/logger.js";
import type {
  RegisterInput,
  LoginInput,
} from "../validators/user.validators.js";
import { registerInput, loginInput } from "../validators/user.validators.js";

//controllers go here...
const register = handleAsync(
  (req: Request, res: Response, next: NextFunction) => {
    // check if user exists from provided input
    // hash password
    // create user object using the vaildator
    // store token object in cookie
    // send token to client
  },
);

const logIn = handleAsync(() => {
  // check if user exists from provided input
  // bcrypt compare passwords
  // if passwords match send token to client
  // if not bounce the animal out
  // store token in cookie
  // send token to client
});

const logOut = handleAsync(() => {
  // remove token from cookie
  // redirect
});

const changePassword = handleAsync(() => {
  // check if user is authenticated
  // change password via db update
  // can send a status message
});

const changeUsername = handleAsync(() => {
  // check if user is authenticated
  // change username via db update
  // can send a status message
});

const githubSignin = handleAsync(() => {});

export {
  register,
  logIn,
  logOut,
  changePassword,
  changeUsername,
  githubSignin,
};
