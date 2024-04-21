import express, { Application } from "express";
import "dotenv/config";
import router from "./routes/router";
import cors from "cors";

export const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/api/healthy", (req, res) => {
  res.send("Server is healthy and running!");
});

app.use("/api", router);
