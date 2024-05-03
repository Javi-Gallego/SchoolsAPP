import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { isAdmin } from "../../middlewares/isAdmin";
import { getUsers } from "./user.controller";

const router = Router();

router.get("/", auth, getUsers);
// router.get("/profile", auth, profile);
// router.put("/:id", auth, isAdmin, updateUser);
// router.delete("/:id", auth, isAdmin, deleteUser);

export default router;