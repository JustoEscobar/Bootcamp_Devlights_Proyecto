import express from "express";
import { config } from "dotenv";
import dbConnect from "./db/dbConnect";
import { authRouter, userRouter, adminRouter, productRouter } from "./routes";

config();

const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/product", productRouter);

dbConnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
