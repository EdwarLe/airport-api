import { Router } from "express";

import {
  createPassenger,
  deletePassenger,
  findAllPassengers,
  findOnePassenger,
  updatePassenger,
} from "./passengers.controller.js";

export const router = Router();

//Rutas
//endpoint 1: obtener todos los pasajeros
router.get("/passengers", findAllPassengers);

//endpoint 2: crear un pasajero

router.post("/passengers", createPassenger);

//endpoint 3: obtener un pasajero dado su id

router.get("/passengers/:id", findOnePassenger);

//endpoint 4: actualizar la información de un pasajero

router.patch("/passengers/:id", updatePassenger);

//endpoint 5: eliminar la información de un pasajero

router.delete("/passengers/:id", deletePassenger);
