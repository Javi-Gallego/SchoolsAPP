import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { createParentStudent } from "./parent_student.controller";

const router = Router();

// router.get("/", auth, getEvents);
router.post("/", auth, isAdmin, createParentStudent);
// router.put("/:id", auth, isAdmin, updateEvent);
// router.delete("/:id", auth, isAdmin, deleteEvent);

export default router;