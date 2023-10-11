import { envs } from "../config/environments/environment.js"



export const globalErrorHandler = (err, req, res, next) => {
        err.statusCode = err.statusCode || 500
        err.status = err.status || 'fail'
    
        // if(envs.NODE_ENV === "development") {
        //     send
        // }

        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    }
