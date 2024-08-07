// Rutas para usuarios
import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/getUsers", userController.getUsers);
usersRouter.get("/getUser/:id", userController.getUser);
usersRouter.post("/create-user", userController.createUser);
usersRouter.delete("/delete-user/:id", userController.deleteUser);
usersRouter.put("/update-user/:id", userController.updateUser);

usersRouter.get("/user-data", (req: Request, res: Response) => {
    res.send("User Data");
});

usersRouter.get("/user-settings", (req: Request, res: Response) => {
    res.send("User Settings");
});

export default usersRouter;