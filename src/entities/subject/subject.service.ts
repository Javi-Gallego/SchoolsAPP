import { Request } from "express";
import { createSubjectRepository } from "./subject.repository";
import { ValidationError } from "../../utils/handleError";
import { Subject } from "./subject.model";

export const getSubjectsService = async () => {
    const subjects = await Subject.find();
};

export const createSubjectService = async (req: Request) => {
  const { name } = req.body;

  const nameExists = await Subject.findOne({ where: { name: name } });
  if (nameExists) {
    throw new ValidationError("Subject already exists");
  }

  const newSubject = await createSubjectRepository(name);

  return newSubject;
};
