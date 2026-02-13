import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import UserRouter from "./routes/task.js";
import { notFound } from "./middleware/noFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import authProtect from "./routes/auth.js";
import authAdmin from "./routes/admin.js";
import TaskRouter from "./routes/userTask.js";
import AllTasks from "./routes/GetMyTasks.js";
import updateTask from "./routes/updateTasks.js";
import DeleteTask from "./routes/TaskDelete.js";
import helmet from "helmet";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './util/swagger.js'

import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); //
const app = express();
const PORT = process.env.PORT || 2000;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/auth", authProtect);
app.use("/api/admin", authAdmin);
app.use("/api/tasks", TaskRouter);
app.use("/api/allTask", AllTasks);
app.use("/api/update", updateTask);
app.use("/api/delete", DeleteTask);

// Server frontend in Production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.dirname(fileURLToPath)(import.meta.url);
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.send(path.join(__dirname, "..", "frontend", "dist", "index.html"));
  });
}

app.use(notFound);
app.use(errorHandler);
mongoose
  .connect(
    process.env.NODE_ENV == "development"
      ? process.env.MONGO_URI_DEV
      : process.env.MONGO_URI_PRO,
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Connection err:", err));

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
