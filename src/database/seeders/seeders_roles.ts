import { Role } from "../../entities/role/role.model";
import { AppDataSource } from "../db";

export const roleSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const roleSuperAdmin = new Role();
    roleSuperAdmin.name = "super_admin";
    await roleSuperAdmin.save();

    const roleAdmin = new Role();
    roleAdmin.name = "admin";
    await roleAdmin.save();

    const rolePersonal = new Role();
    rolePersonal.name = "personal";
    await rolePersonal.save();

    const roleTeacher = new Role();
    roleTeacher.name = "teacher";
    await roleTeacher.save();

    const RoleStudent = new Role();
    RoleStudent.name = "student";
    await RoleStudent.save();

    const RoleParent = new Role();
    RoleParent.name = "parent";
    await RoleParent.save();

    console.log("--------------------------------------------------");
    console.log("----- Los roles se han creado correctamente ------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
