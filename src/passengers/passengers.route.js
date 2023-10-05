import { Router } from "express";

import {
  createPassenger,
  deletePassenger,
  findAllPassengers,
  findOnePassenger,
  updatePassenger,
} from "./passengers.controller.js";
import { validateExistPassenger } from "./passengers.middlewares.js";

export const router = Router();

router.route('/')
.get(findAllPassengers)
.post(createPassenger)

router.route('/:id')
.get(validateExistPassenger, findOnePassenger)
.patch(validateExistPassenger, updatePassenger)
.delete(validateExistPassenger, deletePassenger)
