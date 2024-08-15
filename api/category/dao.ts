import Category from "./model";
import { ICategory } from "./types";

class CategoryDao {

    async getAllCategories() {
        try {
            const categories = await Category.find();
            return categories;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async getCategoryById(categoryId: string) {
        try {
            const category = await Category.findById(categoryId);
            return category;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async createCategory(category: ICategory) {
        try {
            const newCategory = await Category.create(category);
            return newCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async editCategory(categoryId: string, category: Partial<ICategory>) {
        try {
            const updatedCategory = await Category.findByIdAndUpdate(categoryId, category, { new: true });
            return updatedCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async deleteCategory(CategoryId: string) {
        try {
            const deletedCategory = await Category.findByIdAndDelete(CategoryId);
            return deletedCategory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const categoryDao = new CategoryDao();