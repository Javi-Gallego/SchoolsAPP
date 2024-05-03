import { Course } from "../../entities/course/course.model";
import { AppDataSource } from "../db";

export const courseSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const course1 = new Course();
    course1.name = "Trens";
    course1.stageId = 1;
    course1.year = "1";
    await course1.save();

    const course2 = new Course();
    course2.name = "Vaixells";
    course2.stageId = 1;
    course2.year = "2";
    await course2.save();

    const course3 = new Course();
    course3.name = "Avions";
    course3.stageId = 1;
    course3.year = "3";
    await course3.save();

    const course4 = new Course();
    course4.name = "1º Primaria";
    course4.stageId = 2;
    course4.year = "1";
    await course4.save();

    const course5 = new Course();
    course5.name = "2º Primaria";
    course5.stageId = 2;
    course5.year = "2";
    await course5.save();

    const course6 = new Course();
    course6.name = "3º Primaria";
    course6.stageId = 2;
    course6.year = "3";
    await course6.save();

    const course7 = new Course();
    course7.name = "1º ESO";
    course7.stageId = 3;
    course7.year = "1";
    await course7.save();

    const course8 = new Course();
    course8.name = "2º ESO";
    course8.stageId = 3;
    course8.year = "2";
    await course8.save();


    console.log("--------------------------------------------------");
    console.log("---------- Courses created successfully ----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};