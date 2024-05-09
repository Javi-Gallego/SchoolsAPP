import { ParentStudent } from "./parent_student.model";

export const createParentStudentRepository = async (studentId: number, parentId: number) => {
    const parentStudent = await ParentStudent.create({ parentId, studentId }).save();

    return parentStudent;
};