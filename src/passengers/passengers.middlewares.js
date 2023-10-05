import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const validateExistPassenger = async (req, res, next) => {
  const { id } = req.params;
  const passenger = await passengerService.findOnePassenger(id);

  if (!passenger) {
    return res.status(404).json({
      status: "error",
      message: `Passenger with id: ${id} not found`,
    });
  }

  req.passenger = passenger
  next()
};
