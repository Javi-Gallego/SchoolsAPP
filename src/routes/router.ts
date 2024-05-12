import { Router } from "express";
import authRoutes from "../entities/auth/auth.routes";
import userRoutes from "../entities/user/user.routes";
import stageRoutes from "../entities/stage/stage.routes";
import courseRoutes from "../entities/course/course.routes";
import subjectRoutes from "../entities/subject/subject.routes";
import courseSubjectRoutes from "../entities/course_subject/course_subject.routes";
import courseUserRoutes from "../entities/course_user/course_user.routes";
import eventRoutes from "../entities/event/event.routes";
import messageRoutes from "../entities/message/message.routes";
import parentStudentRoutes from "../entities/parent_student/parent_student.routes";
import notificationRoutes from "../entities/notification/notification.routes";
import userRolesRoutes from "../entities/user_role/user_role.routes";

const router = Router();

router.use("/auth", authRoutes);
// router.use("/schools", schoolRoutes);
// router.use("/roles", roleRoutes);
router.use("/users", userRoutes);
router.use("/usersroles", userRolesRoutes);
router.use("/parentstudent", parentStudentRoutes);
router.use("/stages", stageRoutes);
router.use("/subjects", subjectRoutes);
router.use("/courses", courseRoutes);
router.use("/coursesubjects", courseSubjectRoutes);
router.use("/courseusers", courseUserRoutes);
router.use("/events", eventRoutes);
router.use("/notifications", notificationRoutes);
router.use("/messages", messageRoutes);


export default router;
