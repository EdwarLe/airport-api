import { Router } from "express";

import {
  createPassenger,
  deletePassenger,
  findAllPassengers,
  findOnePassenger,
  updatePassenger,
} from "./passengers.controller.js";

export const router = Router();

router.route('/passengers')
.get(findAllPassengers)
.post(createPassenger)

router.route('/passengers/:id')
.get(findOnePassenger)
.patch(updatePassenger)
.delete(deletePassenger)
