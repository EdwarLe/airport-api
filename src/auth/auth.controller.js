import { encryptedPassword, verifyPassword } from "../config/plugins/encripted-password.plugin.js";
import generateJWT from "../config/plugins/generate-jwt.plugin.js";
import { AppError, catchAsync } from "../errors/index.js";
import { validateLogin, validateRegister } from "./auth.schema.js";
import { AuthService } from "./auth.service.js";

const authService = new AuthService();

export const login = catchAsync(async (req, res, next) => {
  const { hasError, errorMessage, userData } = validateLogin(req.body);

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessage,
    });
  }

  const user = await authService.findOneUserByEmail(userData.email)

 if(!user) {
    return next(new AppError('This account does not exist', 404))
 }

 const isCorrectPassword = await verifyPassword(userData.password, user.password)

 if(!isCorrectPassword) {
    return next(new AppError('Incorrect email or password', 401))
 }

 const token = await generateJWT(user.id)

 return res.status(200).json({
    token,
    user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        gender: user.gender,
      }
 }
 )
});
export const register = catchAsync(async (req, res, next) => {
  const { hasError, errorMessage, userData } = validateRegister(req.body);

  if (hasError) {
    return res.status(422).json({
      status: "error",
      message: errorMessage,
    });
  }

  const user = await authService.createUser(userData);

  const token = await generateJWT(user.id);

  return res.status(201).json({
    token,
    user: {
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      gender: user.gender,
    },
  });
});

export const changePassword = catchAsync(async(req, res, next) => {
    const {sessionUser} = req

    const {currentPassword, newPassword} = req.body

    if(currentPassword === newPassword) {
        return next(new AppError('The password cannot be equals'))
    }

    const isCorrectPassword = await verifyPassword(currentPassword, sessionUser.password)

    if(!isCorrectPassword) {
        return next(new AppError('Incorrect email or password', 401))
     }

    const hashedNewPassword = await encryptedPassword(newPassword)

    await authService.updateUser(sessionUser, {
        password: hashedNewPassword,
        changedPasswordAt: new Date()
    })

    return res.status(200).json({
        message: 'The user password was updated successfully'
    })
})

export const deleteAcount = catchAsync(async(req, res, next) => {
  const {user} = req

  await authService.deleteUser(user)

  return res.status(204).json(null)
})
