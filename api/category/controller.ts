import { Request, Response } from "express";
import { categoryService } from "./service";

const { getCategories, getCategory, createCategory, deleteCategory, editCategory } = categoryService;

class CategoryController {

    async createCategory(req: Request, res: Response) {
        try {
        const newCategory = createCategory(req.body);
        return res.status(201).json(newCategory);
        } catch (error) {
        console.log(error);
        }
    }

    async getCategories(req: Request, res: Response) {
            try {
        const categories = await getCategories();
        return res.status(200).json(categories);
        } catch (error) {
        console.log(error);
        }
    }
    async getCategory(req: Request, res: Response) {
        try {
        const category = await getCategory(req.params.id);
        return res.status(200).json(category);
        } catch (error) {
        return res.status(400).json({ error: "Category not found" });
        }
    }
    async deleteCategory(req: Request, res: Response) {
        try {
        const category = await deleteCategory(req.params.id);
        return res.status(200).json(category);
        } catch (error) {
        return res.status(400).json({ error: "Category not found" });
        }
    }

    async editCategory(req: Request, res: Response) {
        try {
        const idCategory = req.params.id;
        const data = req.body;
        const updateCategory = await editCategory(idCategory,data);
        return res.status(200).json(updateCategory);
        } catch (error) {
        return res.status(400).json({ error: "Error updating category" });
        }
    }
}

export const categoryController = new CategoryController();