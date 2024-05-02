import { Course } from "../course/course.model";
import { Stage } from "./stage.model";

export const getStagesRepository = async (schoolId: number) => {
    if (isNaN(schoolId)) {
        throw new Error('Invalid schoolId');
      }
  try {
    const stages = await Stage.find({ where: { schoolId: schoolId } });

    return stages;
  } catch (error) {
    console.log(error);
  }
};

export const createStageRepository = async (name: string, schoolId: number) => {
  try {
    const newStage = await Stage.create({
      name: name,
      schoolId: schoolId,
    }).save();

    return newStage;
  } catch (error) {
    console.log(error);
  }
};

export const updateStageRepository = async (id: number, name: string) => {
  try {
    const updatedStage = await Stage.update(id, {
      name: name,
    });

    return updatedStage;
  } catch (error) {
    console.log(error);
  }
};

export const getCoursesToStageRepository = async (id: number) => {
  try {
    const courses = await Course.find({ where: { stageId: id } });

    return courses;
  } catch (error) {
    console.log(error);
  }
};

export const deleteStageRepository = async (id: number) => {
  try {
    const stage = await Stage.delete(id);

    return stage;
  } catch (error) {
    console.log(error);
  }
};
