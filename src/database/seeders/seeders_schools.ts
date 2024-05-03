import { School } from "../../entities/school/school.model";
import { AppDataSource } from "../db";

export const schoolSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const School1 = new School();
    School1.name = "El Drac";
    School1.address = "Calle Mendez Nuñez 21-23";
    School1.phone = 961559664;
    School1.logo = "/uploads/schools/escola-el-drac-logo.png";
    School1.web = "https://escolaeldrac.com/";
    await School1.save();

    console.log("--------------------------------------------------");
    console.log("---------- Schools created successfully ----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
