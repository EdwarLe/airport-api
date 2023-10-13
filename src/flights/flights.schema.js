import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

export const flightSchema = z.object({
    originId: z.number(),
    destinationId: z.number(),
    planeId: z.number(),
    departureTime: z.string({
        invalid_type_error:'Date must be in a correct format',
        required_error: 'Date is required'
    }),
    checkIn: z.string({
        invalid_type_error:'Date must be in a correct format',
        required_error: 'Date is required'
    }),
    statusFlight: z.enum(['pending', 'in progress', 'done', 'cancelled', 'delayed'])
})

export function validateFlight(data) {
    const result = flightSchema.safeParse(data)
    const {hasError, errorMessage, data: flightData} = extractValidationData(result)

    return {
        hasError, errorMessage, flightData
    }
}

export function validatePartialFlight(data) {
    const result = flightSchema.partial().safeParse(data)
    const {hasError, errorMessage, data: flightData} = extractValidationData(result)

    return {
        hasError, errorMessage, flightData
    }
}