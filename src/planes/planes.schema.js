import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'


export const planeSchema = z.object({
    planeNumber: z.number(),
    model: z.string(20),
    maxCapacity: z.number(),
    airline: z.enum(["AeroGlobe",
    "AeroTronix",
    "VelocityAir",
    "AirQuest",
    "StartLink"])
})

export function validatePlane(data) {
    const result = planeSchema.safeParse(data)
    const {hasError, errorMessage, data: planeData} = extractValidationData(result)

    return {
        hasError, errorMessage, planeData
    }
}

export function validatePartialPlane(data) {
    const result = planeSchema.partial().safeParse(data)
    const {hasError, errorMessage, data: planeData} = extractValidationData(result)

    return {
        hasError, errorMessage, planeData
    }
}