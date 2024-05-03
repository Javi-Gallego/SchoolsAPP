import { Request } from "express";
import { createSubjectRepository, deleteSubjectRepository, getSubjectsRepository } from "./subject.repository";
import { ValidationError } from "../../utils/handleError";
import { Subject } from "./subject.model";


export const getSubjectsService = async (req: Request) => {
    const schoolId = parseInt(req.params.schoolId);

    const subjects = getSubjectsRepository(schoolId);
    return subjects;
};

export const createSubjectService = async (req: Request) => {
  const { name, schoolId } = req.body;


  const nameExists = await Subject.findOne({ where: { name: name } });
  if (nameExists) {
    throw new ValidationError("Subject already exists");
  }

  const newSubject = await createSubjectRepository(name, schoolId);

  return newSubject;
};

export const deleteSubjectService = async (req: Request) => {
  const id = parseInt(req.params.id);

  const deletedSubject = deleteSubjectRepository(id);

  return deletedSubject;
};
