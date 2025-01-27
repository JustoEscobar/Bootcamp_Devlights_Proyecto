// Rutas para productos
import express, { Request, Response } from "express";
import { productController } from "../controllers/productController";

const productsRouter = express.Router();

productsRouter.get("/getProducts", productController.getProducts);
productsRouter.get("/getProduct/:id", productController.getProduct);
productsRouter.post("/create-product", productController.createProduct);
productsRouter.delete("/delete-product/:id", productController.deleteProduct);
productsRouter.put("/update-product/:id", productController.updateProduct);

export default productsRouter;