import { Request, Response } from "express";
import User from "../models/user";

class UserController {

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const idUser = req.params.id;
      const data = req.body;
      const updateUser = await User.findByIdAndUpdate(idUser,data,{ new: true });
      return res.status(200).json(updateUser);
    } catch (error) {
    return res.status(400).json({ error: "Error updating user" });
    }
  }
}

export const userController = new UserController();
