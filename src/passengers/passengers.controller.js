import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const findAllPassengers = async(req, res) => {
  try {
    const passengers = await passengerService.findAllPassengers();
    return res.status(201).json(passengers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createPassenger = async (req, res) => {
  try {
    const passenger = await passengerService.createPassenger(req.body);
    return res.status(201).json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const findOnePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Aquí se recibirá un pasajero por id",
    id,
  });
};

export const updatePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Aquí se actualizará un pasajero por id",
    id,
  });
};

export const deletePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Aquí se eliminaá un pasajero por id",
    id,
  });
};
