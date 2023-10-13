import { Router } from "express";
import { createPlane, deletePlane, findAllPlanes, findOnePlane, updatePlane } from "./planes.controller.js";
import { validateExistPlane } from "./planes.middlewares.js";

export const router = Router()

router.route('/')
.get(findAllPlanes)
.post(createPlane)

router.route('/:id')
.get(validateExistPlane, findOnePlane)
.patch(validateExistPlane, updatePlane)
.delete(validateExistPlane, deletePlane)