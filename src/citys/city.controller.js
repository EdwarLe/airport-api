import { validateCity, validatePartialCity } from "./city.schema.js";
import { CityService } from "./city.service.js";

const cityService = new CityService();

export const createCity = async (req, res) => {
  try {

    const { hasError, errorMessage, cityData } = validateCity(req.body);

    if (hasError) {
      return res.status(421).json({
        status: "error",
        message: errorMessage,
      });
    }

    const city = await cityService.createCity(cityData);

    return res.status(201).json(city);

  } catch (error) {
    return res.status(500).json(console.log(error));
  }
};

export const findAllCities = async (req, res) => {
  try {

    const cities = await cityService.findAllCitys();

    return res.status(201).json(cities);

  } catch (error) {
    return res.status(500).json(error);
  }
};

export const findOneCity = async (req, res) => {
  try {

    const {city} = req
    return res.status(201).json(city);

  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateCity = async (req, res) => {
  try {
    
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
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteCity = async (req, res) => {
  try {

    const {city} = req

    await cityService.deleteCity(city);

    return res.status(204).json(null);

  } catch (error) {
    return res.status(500).json(error);
  }
};
