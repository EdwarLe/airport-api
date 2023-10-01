import { validatePartialPassenger, validatePassenger } from "./passenger.schema.js";
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

    const { hasError, errorMessage, passengerData } = validatePassenger(req.body);

    if(hasError) {
      return res.status(421).json({
        status: 'error',
        message: errorMessage
      })
    }

    const passenger = await passengerService.createPassenger(passengerData);

    return res.status(201).json(passenger);

  } catch (error) {

    return res.status(500).json({status:error,
    message:"salto aqui"});
  }
};

export const findOnePassenger = async (req, res) => {
  try {
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }

    return res.json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePassenger = async (req, res) => {
  try {

    const {hasError, errorMessage, passengerData} = validatePartialPassenger(req.body)

    if(hasError) {
      return res.status(421).json({
        status: 'error',
        message: errorMessage
      })
    }

    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }

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
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id: ${id} not found`,
      });
    }

    await passengerService.deletePassenger(passenger);

    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
};
