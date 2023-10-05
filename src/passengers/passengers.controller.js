import {
  validatePartialPassenger,
  validatePassenger,
} from "./passengers.schema.js";
import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const findAllPassengers = async (req, res) => {
  try {
    const passengers = await passengerService.findAllPassengers();
    return res.status(201).json(passengers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createPassenger = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const findOnePassenger = async (req, res) => {
  try {
    
    const {passenger} = req

    return res.json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePassenger = async (req, res) => {
  try {
    const { hasError, errorMessage, passengerData } = validatePartialPassenger(
      req.body
    );

    if (hasError) {
      return res.status(421).json({
        status: "error",
        message: errorMessage,
      });
    }

    const {passenger} = req

    const updatePassenger = await passengerService.updatePassenger(
      passenger,
      passengerData
    );

    return res.json(updatePassenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deletePassenger = async (req, res) => {
  try {
    const {passenger} = req

    await passengerService.deletePassenger(passenger);

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
};
