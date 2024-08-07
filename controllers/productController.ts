import { Request, Response } from "express";
import Product from "../models/product";

class ProductController {
  
  async createProduct(req: Request, res: Response) {
    try {
      const newProduct = Product.create(req.body);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async getProducts(req: Request, res: Response) {
        try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }
  async getProduct(req: Request, res: Response) {
    try {
      const product = await Product.findById(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }
  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const idProduct = req.params.id;
      const data = req.body;
      const updateProduct = await Product.findByIdAndUpdate(idProduct,data,{ new: true });
      return res.status(200).json(updateProduct);
    } catch (error) {
    return res.status(400).json({ error: "Error updating product" });
    }
  }
}

export const productController = new ProductController();
