import { Router } from "express";
import {router as passengerRouter} from '../passengers/passengers.route.js' 

export const router = Router()

router.use('/passengers', passengerRouter)