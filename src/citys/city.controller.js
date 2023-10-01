import { CityService } from "./city.service.js";

const cityService = new CityService();

export const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json(city);
  } catch (error) {
    return res.status(500).json(error);
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
    const { id } = req.params;
    const city = await cityService.findOneCity(id);
    return res.status(201).json(city);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.findOneCity(id);

    if (!city) {
      return res.status(404).json({
        status: "error",
        message: `City with id: ${id} not found`,
      });
    }
    const updateCity = await cityService.updateCity(city, req.body);

    return res.status(201).json(updateCity);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.findOneCity(id);

    if (!city) {
      return res.status(201).json({
        status: "error",
        message: `City with id: ${id} not found`,
      });
    }

    await cityService.deleteCity(city);
    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
};
