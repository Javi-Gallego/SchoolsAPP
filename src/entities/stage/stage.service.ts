import { Request } from "express";
import {
  createStageRepository,
  deleteStageRepository,
  getCoursesToStageRepository,
  updateStageRepository,
} from "./stage.repository";

export const createStageService = async (req: Request) => {
  const { name, schoolId } = req.body;

  const newStage = await createStageRepository(name, schoolId);

  return newStage;
};

export const updateStageService = async (req: Request) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const updatedStage = await updateStageRepository(id, name);

  return updatedStage;
};

export const deleteStageService = async (req: Request) => {
  const id = parseInt(req.params.id);

  const courses = await getCoursesToStageRepository(id);

  if (courses && courses.length > 0) {
    throw new Error("Can't delete stage with courses");
  }

  const deletedStage = await deleteStageRepository(id);

  return deletedStage;
};
