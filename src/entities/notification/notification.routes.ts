import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createNotification, getNotifications } from "./notification.controller";

const router = Router();

router.get("/", auth, getNotifications);
router.post("/", auth, createNotification);
// router.put("/:id", auth, isAdmin, updateNotification);
// router.delete("/:id", auth, isAdmin, deleteNotification);

export default router;