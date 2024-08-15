import { Request, Response } from "express";
import { productService } from "./service";

const { getProducts, getProduct, createProduct, deleteProduct, editProduct } = productService;

class ProductController {
  
  async createProduct(req: Request, res: Response) {
    try {
      const newProduct = createProduct(req.body);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts(req: Request, res: Response) {
        try {
      const products = await getProducts();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }
  async getProduct(req: Request, res: Response) {
    try {
      const product = await getProduct(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }
  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await deleteProduct(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }

  async editProduct(req: Request, res: Response) {
    try {
      const idProduct = req.params.id;
      const data = req.body;
      const updateProduct = await editProduct(idProduct,data);
      return res.status(200).json(updateProduct);
    } catch (error) {
    return res.status(400).json({ error: "Error updating product" });
    }
  }
}

export const productController = new ProductController();
