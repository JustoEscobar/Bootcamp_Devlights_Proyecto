import express from "express";
import { categoryController } from "./controller";

const categoryRouter = express.Router();
const { getCategories, getCategory, createCategory, deleteCategory, editCategory } = categoryController;

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/createCategory", createCategory);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);
categoryRouter.put("/editCategory/:id", editCategory);

export default categoryRouter;