import { envs } from "../config/environments/environment.js";
import { AppError, catchAsync } from "../errors/index.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

export const protect = catchAsync(async (req, res, next) => {
  //1. obtener el token
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  //2. validad si el token existe
  if (!token) {
    return next(
      new AppError("You are not logged in!, Please log in to get access", 401)
    );
  }

  //3. decodificar el token
  const decoded = await promisify(jwt.verify)(
    token,
    envs.SECRET_JWT_SEED,
  )
});
