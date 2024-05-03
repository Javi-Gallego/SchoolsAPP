import { Subject } from "../../entities/subject/subject.model";
import { AppDataSource } from "../db";

export const subjectSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const subject1 = new Subject();
    subject1.name = "Matemáticas";
    subject1.schoolId = 1;
    await subject1.save();

    const subject2 = new Subject();
    subject2.name = "Valenciano";
    subject2.schoolId = 1;
    await subject2.save();

    const subject3 = new Subject();
    subject3.name = "Música";
    subject3.schoolId = 1;
    await subject3.save();

    console.log("--------------------------------------------------");
    console.log("--------- Subjects created successfully ----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
