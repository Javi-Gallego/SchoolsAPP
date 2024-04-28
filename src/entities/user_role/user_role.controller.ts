import { UserRole } from "./user_role.model";

export const createUserRole = async (userId: number, roleId: number) => {
    try {
        await UserRole.create({
            userId,
            roleId
        }).save();
    } catch (error) {
        
    }
};