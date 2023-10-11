import express from "express";

import { router } from "./routes/routes.js";
import { AppError } from "./errors/appError.js";
import morgan from "morgan";
import { envs } from "./config/environments/environment.js";
import { globalErrorHandler } from "./errors/error.controller.js";
const app = express();

app.use(express.json());

if(envs.NODE_ENV === "development") {
    app.use(morgan('dev'))
}



app.use('/api/v1', router)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)


export default app