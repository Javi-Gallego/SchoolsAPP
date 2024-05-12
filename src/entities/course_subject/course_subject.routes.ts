import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { createCourseSubject, deleteCourseSubject, getCourseSubjects } from "./course_subject.controller";


const router = Router();

router.get("/:courseId", auth, isAdmin, getCourseSubjects);
router.post("/", auth, isAdmin, createCourseSubject);
// router.put("/:id", auth, isAdmin, updateSubject);
router.delete("/", auth, isAdmin, deleteCourseSubject);

export default router;