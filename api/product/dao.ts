import Product from "./model";
import { IProduct } from "./types";

class ProductDao {
    async getAllProducts() {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async getProductById(productId: string) {
        try {
            const product = await Product.findById(productId);
            return product;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async createProduct(product: IProduct) {
        try {
            const newProduct = await Product.create(product);
            return newProduct;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async editProduct(productId: string, product: Partial<IProduct>) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true });
            return updatedProduct;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async deleteProduct(ProductId: string) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(ProductId);
            return deletedProduct;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const productDao = new ProductDao();