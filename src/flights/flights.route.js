import { Router } from "express";
import { createFlight, deleteFlight, findAllFlights, findOneFlight, updateFlight } from "./flights.controller.js";
import { validateExistFlight } from "./flights.middlewares.js";


export const router = Router()

router.route('/')
.get(findAllFlights)
.post(createFlight)

router.route('/:id')
.get(validateExistFlight, findOneFlight)
.patch(validateExistFlight, updateFlight)
.delete(validateExistFlight, deleteFlight)