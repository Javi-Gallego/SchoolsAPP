import { Stage } from "../../entities/stage/stage.model";
import { AppDataSource } from "../db";

export const stageSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const stage1 = new Stage();
    stage1.name = "Infantil";
    stage1.schoolId = 1;
    await stage1.save();

    const stage2 = new Stage();
    stage2.name = "Primaria";
    stage2.schoolId = 1;
    await stage2.save();

    const stage3 = new Stage();
    stage3.name = "Secundaria";
    stage3.schoolId = 1;
    await stage3.save();


    console.log("--------------------------------------------------");
    console.log("----------- Stages created successfully ----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
