import express, { Request, Response } from "express";
import { isAdmin } from "../middlewares/index";

const adminRouter = express.Router();

adminRouter.post("/dashboard", isAdmin, (req: Request, res: Response) => {
  res.send("Welcome to the admin dashboard");
});

export default adminRouter;