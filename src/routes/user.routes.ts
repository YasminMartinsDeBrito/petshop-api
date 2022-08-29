import { Router } from "express";
import { userController } from "../controllers";
import {
  getUserByIdOr404,
  userPermission,
  validateSchema,
  tokens,
  userExists,
} from "../middlewares";
import { createUserSchema, loginUserSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/register",
  validateSchema(createUserSchema),
  userExists,
  userController.createUser
);

userRouter.post(
  "/login",
  validateSchema(loginUserSchema),
  userController.loginUser
);

userRouter.get("", userController.getAll);
userRouter.get("/:userId", getUserByIdOr404, userController.getUserById);

userRouter.patch(
  "/:userId",
  tokens,
  getUserByIdOr404,
  userPermission,
  userController.updateUser
);
userRouter.delete(
  "/:userId",
  tokens,
  getUserByIdOr404,
  userPermission,
  userController.deleteUser
);

export default userRouter