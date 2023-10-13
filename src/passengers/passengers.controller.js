import { AppError, catchAsync } from "../errors/index.js";
import {
  validatePartialPassenger,
  validatePassenger,
} from "./passengers.schema.js";
import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const findAllPassengers = catchAsync(async (req, res, next) => {
  const passengers = await passengerService.findAllPassengers();
  return res.status(201).json(passengers);
});

export const createPassenger = catchAsync(async (req, res, next) => {
    const { hasError, errorMessage, passengerData } = validatePassenger(
      req.body
    );

    if (hasError) {
      return res.status(421).json({
        status: "error",
        message: errorMessage,
      });
    }

    const passenger = await passengerService.createPassenger(passengerData);
    return res.status(201).json(passenger);
});

export const findOnePassenger = catchAsync(async (req, res, next) => {
    const { passenger } = req;
    return res.json(passenger);
});

export const updatePassenger = catchAsync(async (req, res, next) => {
    const { hasError, errorMessage, passengerData } = validatePartialPassenger(
      req.body
    );

    if (hasError) {
      return res.status(421).json({
        status: "error",
        message: errorMessage,
      });
    }

    const { passenger } = req;
    const updatePassenger = await passengerService.updatePassenger(
      passenger,
      passengerData
    );
    return res.json(updatePassenger);

})

export const deletePassenger = catchAsync(async (req, res, next) => {
    const { passenger } = req;

    await passengerService.deletePassenger(passenger);
    return res.status(204).json(null);
});
