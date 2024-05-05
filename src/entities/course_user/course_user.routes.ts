import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { getCourseUsers } from "./course_user.controller";

const router = Router();

router.get("/:courseId", auth, isAdmin, getCourseUsers);
// router.post("/", auth, isAdmin, createCourseUsers);
// router.put("/:id", auth, isAdmin, updateSubject);
// router.delete("/:id", auth, isAdmin, deleteCourseSubject);

export default router;