import z from "zod";
import { extractValidationData } from "../common/utils/extractErrorData.js";

export const citySchema = z.object({
  name: z.string().min(2).max(100),
  country: z.string().min(2).max(100),
  lat: z.number(),
  lon: z.number(),
});

export function validateCity(data) {
  const result = citySchema.safeParse(data);
  const {
    hasError,
    errorMessage,
    data: cityData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessage,
    cityData,
  };
}

export function validatePartialCity(data) {
  const result = citySchema.partial().safeParse(data);
  const {
    hasError,
    errorMessage,
    data: cityData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessage,
    cityData,
  };
}
