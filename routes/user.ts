import { Router } from "express";
import UserController from "../controller/UserController";

export const userRouter = Router();

userRouter.post("/create", UserController.createUser);
userRouter.post("/login-user", UserController.loginUser);
userRouter.post("/register-user", UserController.registerUser)
userRouter.get("/get-user-by-email", UserController.getUserByEmail);
userRouter.put("/edit-user", UserController.editUserInfo);
userRouter.delete("/delete", UserController.deleteUser)