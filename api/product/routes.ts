import express from "express";
import { productController } from "./controller";

const productRouter = express.Router();
const { getProducts, getProduct, createProduct, deleteProduct, editProduct } = productController;

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/createProduct", createProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.put("/editProduct/:id", editProduct);

export default productRouter;