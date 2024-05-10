import { Request } from "express";
import { ValidationError } from "../../utils/handleError";
import { createUserRoleRepository } from "./user_role.repostitory";

export const createUserRoleService = async (req: Request) => {
    const { userId, roleId } = req.body;
    if (!userId || !roleId) {
        throw new ValidationError("All the fields are required");
    }
    const userRole = await createUserRoleRepository(userId, roleId);
};