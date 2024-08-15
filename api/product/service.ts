import { IProduct } from "./types";
import { productDao } from "./dao";


const { getAllProducts, getProductById, createProduct, editProduct, deleteProduct } = productDao;

class ProductService {
    
    async getProduct(id: string) {
        try {
        const product = await getProductById(id);
        return product;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async getProducts() {
        try {
            const products = await getAllProducts();
            return products;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    
    async createProduct(product: IProduct) {
        try {
            const newProduct = await createProduct(product);
            return newProduct;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async editProduct(id: string, product: Partial<IProduct>) {
        try {
            const updatedProduct = await editProduct(id, product);
            return updatedProduct;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
    
    async deleteProduct(id: string) {
        try {
            await deleteProduct(id);
            return { message: "Product deleted successfully" };
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}

export const productService = new ProductService();