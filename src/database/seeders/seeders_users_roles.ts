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

    const userRole5 = new UserRole();
    userRole5.roleId = 4;
    userRole5.userId = 10;
    await userRole5.save();

    const userRole6 = new UserRole();
    userRole6.roleId = 4;
    userRole6.userId = 11;
    await userRole6.save();

    const userRole7 = new UserRole();
    userRole7.roleId = 4;
    userRole7.userId = 12;
    await userRole7.save();

    const userRole8 = new UserRole();
    userRole8.roleId = 4;
    userRole8.userId = 13;
    await userRole8.save();

    const userRole9 = new UserRole();
    userRole9.roleId = 4;
    userRole9.userId = 14;
    await userRole9.save();

    const userRole10 = new UserRole();
    userRole10.roleId = 5;
    userRole10.userId = 5;
    await userRole10.save();

    const userRole11 = new UserRole();
    userRole11.roleId = 5;
    userRole11.userId = 8;
    await userRole11.save();

    const userRole12 = new UserRole();
    userRole12.roleId = 5;
    userRole12.userId = 9;
    await userRole12.save();

    console.log("--------------------------------------------------");
    console.log("-------- user_roles created successfully ---------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
