import { Router } from "express";
import {
  createStage,
  deleteStage,
  getStages,
  updateStage,
} from "./stage.controller";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";

const router = Router();

router.get("/:schoolId", auth, getStages);
router.post("/", auth, isAdmin, createStage);
router.put("/:id", auth, isAdmin, updateStage);
router.delete("/:id", auth, isAdmin, deleteStage);

export default router;
