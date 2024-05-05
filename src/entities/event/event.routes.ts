import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { getEvents } from "./event.controller";

const router = Router();

router.get("/", auth, getEvents);
// router.post("/", auth, isAdmin, createStage);
// router.put("/:id", auth, isAdmin, updateStage);
// router.delete("/:id", auth, isAdmin, deleteStage);

export default router;