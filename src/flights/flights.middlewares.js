import { AppError, catchAsync } from "../errors/index.js";
import { FlightsService } from "./flights.service.js";



const flightService = new FlightsService()

export const validateExistFlight = catchAsync(async(req, res, next) => {
    const {id} = req.params
    const flight = await flightService.findOneFlight(id)

    if(!flight) {
        return next(new AppError(`Flight whit id: ${id} not found`))
    }

    req.flight = flight
    next()
})