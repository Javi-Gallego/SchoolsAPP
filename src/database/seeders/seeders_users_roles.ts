import { UserRole } from "../../entities/user_role/user_role.model";
import { AppDataSource } from "../db";

export const userRoleSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const userRole1 = new UserRole();
    userRole1.roleId = 1;
    userRole1.userId = 1;
    await userRole1.save();

    const userRole2 = new UserRole();
    userRole2.roleId = 2;
    userRole2.userId = 2;
    await userRole2.save();

    const userRole3 = new UserRole();
    userRole3.roleId = 4;
    userRole3.userId = 3;
    await userRole3.save();

    const userRole4 = new UserRole();
    userRole4.roleId = 6;
    userRole4.userId = 3;
    await userRole4.save();

    console.log("--------------------------------------------------");
    console.log("--- Los user_roles se han creado correctamente ---");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
