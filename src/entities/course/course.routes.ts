import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { createCourse, deleteCourse, getCourses, updateCourse } from "./course.controller";

const router = Router();

router.get("/", auth, getCourses);
router.post("/", auth, isAdmin, createCourse);
router.put("/:id", auth, isAdmin, updateCourse);
router.delete("/:id", auth, isAdmin, deleteCourse);

export default router;