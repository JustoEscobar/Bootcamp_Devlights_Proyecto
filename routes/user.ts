// Rutas para usuarios
import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/getUsers", userController.getUsers);
userRouter.get("/getUser/:id", userController.getUser);
userRouter.delete("/delete-user/:id", userController.deleteUser);
userRouter.put("/update-user/:id", userController.updateUser);

export default userRouter;