import { Router } from "express";
import {
  changePassword,
  deleteAcount,
  login,
  register,
} from "./auth.controller.js";
import { protect, protectAccount, restrictTo, validateExistUser } from "./auth.middlewares.js";

export const router = Router();

router.post("/login", login);

router.post("/register", protect, restrictTo("developer"), register);

router.patch("/change-password", protect, changePassword);

router.delete("/:id", protect, validateExistUser, protectAccount, deleteAcount);
