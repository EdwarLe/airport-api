import { catchAsync } from "../errors/index.js";
import { validatePartialPlane, validatePlane } from "./planes.schema.js";
import { PlaneService } from "./planes.service.js";


const planeService = new PlaneService()

export const findAllPlanes = catchAsync(async(req, res, next) => {
    const planes = await planeService.findAllPlanes()
    
    return res.status(201).json(planes)
})

export const findOnePlane = catchAsync(async(req, res, next) => {
    const {plane} = req
    return res.status(200).json(plane)
})

export const createPlane = catchAsync(async(req, res, next) => {
    const {hasError, errorMessage, planeData} = validatePlane(req.body)

    if(hasError) {
        return res.status(421).json({
            status:'error',
            message: errorMessage
        })
    }

    const plane = await planeService.createPlane(planeData)

    return res.status(201).json(plane)
})

export const updatePlane = catchAsync(async(req, res, next) => {
    const {hasError, errorMessage, planeData} = validatePartialPlane(req.body)

    if(hasError) {
        return res.status(421).json({
            status: 'error',
            message: errorMessage
        })
    }

    const {plane} = req
    const planeUpdated = await planeService.updatePlane(plane, planeData)
    return res.status(201).json(planeUpdated)
})

export const deletePlane = catchAsync(async(req, res, next) => {
    const {plane} = req
    await planeService.deletePlane(plane)
    return res.status(204).json(null)
})