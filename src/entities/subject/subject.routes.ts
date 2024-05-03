import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { createSubject, deleteSubject, getSubjects } from "./subject.controller";

const router = Router();

router.get("/:schoolId", auth, isAdmin, getSubjects);
router.post("/", auth, isAdmin, createSubject);
// router.put("/:id", auth, isAdmin, updateSubject);
router.delete("/:id", auth, isAdmin, deleteSubject);

export default router;