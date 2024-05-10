import express, { Application } from "express";
import "dotenv/config";
import router from "./routes/router";
import cors from "cors";

export const app: Application = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/api/healthy", (req, res) => {
  res.send("Server is healthy and running!");
});

app.use("/api", router);
