import { UserRole } from "./user_role.model";

export const createUserRoleRepository = async (userId: number, roleId: number) => {
    const userRole = await UserRole.create({
        userId,
        roleId
    }).save();

    return userRole;
};