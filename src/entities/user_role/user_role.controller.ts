import { UserRole } from "./user_role.model";

export const createUserRole = async (userId: number, roleId: number) => {
    try {
        console.log("Creating user role");
        console.log(userId," ", roleId);
        await UserRole.create({
            userId,
            roleId
        }).save();
    } catch (error) {
        
    }
};