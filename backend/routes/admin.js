import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/authorize.js";
const router = express.Router();

router.get("/dashboard", protect, authorize("admin"), (req, res) => {
  (res.
    json({
      message: `welcome to admin Dashboard ${req.user.name}`,
    }));
});

export default router;
