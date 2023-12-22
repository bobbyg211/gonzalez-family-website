import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded, json } from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import databaseRouter from "./routes/database.js";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static(resolve(__dirname, "../client/build")));

app.use("/api/database", databaseRouter);

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname + "/../client/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`server started on port ${process.env.PORT || 5000}...`);
});
