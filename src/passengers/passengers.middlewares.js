import {catchAsync, AppError} from '../errors/index.js'
import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const validateExistPassenger = catchAsync(async(req, res, next) => {
    const { id } = req.params;
    const passenger = await passengerService.findOnePassenger(id);
  
    if (!passenger) {
      return next(new AppError(`Passenger whit id: ${id} not found`))
    }
  
    req.passenger = passenger
    next()
  });
  