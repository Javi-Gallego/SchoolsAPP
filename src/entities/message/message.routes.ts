import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { getMessages } from "./message.controller";

const router = Router();

router.get("/", auth, getMessages);
// router.post("/", auth, createMessage);
// router.put("/:id", auth, updateMessage);
// router.delete("/:id", auth, deleteMessage);

export default router;
