import { catchAsync } from "../errors/catchAsync.js";
import { validateCity, validatePartialCity } from "./city.schema.js";
import { CityService } from "./city.service.js";

const cityService = new CityService();

export const createCity = catchAsync(async (req, res, next) => {
    const { hasError, errorMessage, cityData } = validateCity(req.body);

    if (hasError) {
      return res.status(421).json({
        status: "error",
        message: errorMessage,
      });
    }

    const city = await cityService.createCity(cityData);

    return res.status(201).json(city);
});

export const findAllCities = catchAsync(async (req, res, next) => {

    const cities = await cityService.findAllCitys();

    return res.status(201).json(cities);
});

export const findOneCity = catchAsync(async (req, res, next) => {
    const {city} = req
    return res.status(201).json(city);
});

export const updateCity = catchAsync(async (req, res, next) => {
    const {hasError, errorMessage, cityData} = validatePartialCity(req.body)

    if(hasError) {
      return res.status(421).json({
        status: 'error',
        message: errorMessage
      })
    }

    const {city} = req

    const updateCity = await cityService.updateCity(city, cityData);

    return res.json(updateCity);
});

export const deleteCity = catchAsync(async (req, res, next) => {
    const {city} = req

    await cityService.deleteCity(city);

    return res.status(204).json(null);
});
