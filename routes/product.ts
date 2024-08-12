// Rutas para productos
import express, { Request, Response } from "express";
import { productController } from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/getProducts", productController.getProducts);
productRouter.get("/getProduct/:id", productController.getProduct);
productRouter.post("/create-product", productController.createProduct);
productRouter.delete("/delete-product/:id", productController.deleteProduct);
productRouter.put("/update-product/:id", productController.updateProduct);

export default productRouter;