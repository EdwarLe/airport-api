import z, { date } from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'


const registerSchema = z.object({
    fullname: z.string().min(3, { message: 'Name is too short'}).max(199, { message: 'Name is too long'}),
    email: z.string().email({ message: 'Invalid email'}),
    password: z.string().min(8, { message: 'Password is too short'}),
    gender: z.enum(['male', 'female', 'prefer not to sat']),
    role: z.enum(['recepcionist', 'admin', 'developer', 'manager', 'user'])
})

const loginUserSchema = z.object({
    email: z.string().email({ message: 'Invalid email'}),
    password: z.string().min(8, { message: 'Password is too short'}),
})

const passwordSchema = z.object({
    password: z.string().min(8, { message: 'Password is to short'})
})


export const validateRegister = (data) => {
    const result = registerSchema.safeParse(data)

    const {hasError, errorMessage, data: userData} = extractValidationData(result)

    return{
        hasError, errorMessage, userData
    }
}

export const validateLogin = (data) => {
    const result = loginUserSchema.safeParse(data)

    const {hasError, errorMessage, data: userData} = extractValidationData(result)

    return{
        hasError, errorMessage, userData
    }
}

export const validatePassword = (data) => {
    const result = passwordSchema.safeParse(data)

    const {hasError, errorMessage, data: userData} = extractValidationData(result)

    return {
        hasError, errorMessage, userData
    }
}

