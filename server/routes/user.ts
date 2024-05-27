import { Router } from "express";
import UserController from "../controller/UserController";

export const userRouter = Router();

userRouter.post("/login-user", UserController.loginUser);
userRouter.post("/register-user", UserController.registerUser);
userRouter.get("/get-all-users", UserController.getAllUsers);
userRouter.get("/get-user-by-email", UserController.getUserByEmail);
userRouter.post('/distributor/apply', UserController.applyForDistributor);
userRouter.post('/retailer/apply', UserController.applyForRetailer);
userRouter.put("/edit-user", UserController.editUserInfo);
userRouter.delete("/delete", UserController.deleteUser);