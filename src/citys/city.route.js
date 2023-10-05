import { Router} from "express";
import { createCity, deleteCity, findAllCities, findOneCity, updateCity } from "./city.controller.js";
import { validateExistCity } from "./city.middlewares.js";

export const router = Router()

router.route('/')
.get(findAllCities)
.post(createCity)

router.route('/:id')
.get(validateExistCity, findOneCity)
.patch(validateExistCity, updateCity)
.delete(validateExistCity, deleteCity)