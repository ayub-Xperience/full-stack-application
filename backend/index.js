import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

import UserRouter from "../backend/routes/task.js";
import getUsers from "./routes/users.js";
import { notFound } from "./middleware/noFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config(); // MUST be at the top

const app = express();
const PORT = process.env.PORT || 2000;

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/users", getUsers);
app.use(notFound);
app.use(errorHandler);
mongoose
  .connect( process.env.MONGO_URI_PRO
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Connection err:", err));

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
