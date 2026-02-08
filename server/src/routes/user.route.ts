import { Router } from "express";
//importing controllers...
import {
  register,
  logIn,
  logOut,
  changeUsername,
  changePassword,
  //   githubSignin,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", logIn);
router.post("/logout", logOut);

router.patch("/change-username", changeUsername); //will add the auth middleware inbetween
router.patch("/change-password", changePassword); //will add the auth middlware inbetween

//deal with gh soon

export default router;
