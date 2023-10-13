import { catchAsync } from "../errors/index.js";
import { validateFlight, validatePartialFlight } from "./flights.schema.js";
import { FlightsService } from "./flights.service.js";

const flightService = new FlightsService();

export const findAllFlights = catchAsync(async (req, res, next) => {
  const flights = await flightService.findAllFlights();

  return res.status(201).json(flights);
});

export const findOneFlight = catchAsync(async (req, res, next) => {
  const { flight } = req;
  return res.json(flight);
});

export const createFlight = catchAsync(async (req, res, next) => {
  const { hasError, errorMessage, flightData } = validateFlight(req.body);

  if (hasError) {
    return res.status(421).json({
      status: "error",
      message: errorMessage,
    });
  }
  const flight = await flightService.createFlight(flightData);
  return res.status(201).json(flight);
});

export const updateFlight = catchAsync(async (req, res, next) => {
  const { hasError, errorMessage, flightData } = validatePartialFlight(req.body);

  if (hasError) {
    return res.status(421).json({
      status: "error",
      message: errorMessage,
    });
  }

  const { flight } = req;
  const flightUpdated = await flightService.updateFlight(flight, flightData);

  return res.status(201).json(flightUpdated);
});

export const deleteFlight = catchAsync(async (req, res, next) => {
  const { flight } = req;
  await flightService.deleteFlight(flight);

  return res.status(204).json(null);
});
