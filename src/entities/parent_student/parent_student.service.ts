import { Request } from "express";
import { ValidationError } from "../../utils/handleError";
import { createParentStudentRepository } from "./parent_student.repository";

export const createParentStudentService = async (req: Request) => {
    const { studentId, parentId } = req.body;
  
    if (!studentId || !parentId) {
      throw new ValidationError("StudentId and parentId are required");
    }
    if (studentId === parentId) {
      throw new ValidationError("StudentId and parentId must be different");
    }
  
    const parentStudent = await createParentStudentRepository(studentId, parentId);

    return parentStudent;
};