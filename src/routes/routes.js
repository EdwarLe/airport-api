import { Router } from "express";
import {router as passengerRouter} from '../passengers/passengers.route.js'
import {router as cityRouter} from '../citys/city.route.js'
import {router as flightRouter} from '../flights/flights.route.js'
import {router as planeRouter} from '../planes/planes.route.js'
import { router as authRouter } from "../auth/auth.route.js";


export const router = Router()

router.use('/passengers', passengerRouter)
router.use('/city', cityRouter)
router.use('/flights', flightRouter)
router.use('/planes', planeRouter)
router.use('/users', authRouter)