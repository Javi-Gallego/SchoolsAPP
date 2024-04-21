import { Router } from "express";
import authRoutes from "../entities/auth/auth.routes";

const router = Router();

router.use("/auth", authRoutes);
// router.use("/schools", schoolRoutes);
// router.use("/users", userRoutes);
// router.use("/roles", roleRoutes);
// router.use("/stages", stageRoutes);
// router.use("/subjects", subjectRoutes);
// router.use("/courses", courseRoutes);
// router.use("/events", eventRoutes);
// router.use("/notifications", notificationRoutes);
// router.use("/messages", messageRoutes);
// router.use("/parent-student", parentStudentRoutes);


export default router;
