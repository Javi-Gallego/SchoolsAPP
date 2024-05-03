import { Subject } from "./subject.model";

export const getSubjectsRepository = async (schoolId: number) => {
    const subjects = await Subject.find({where: {schoolId: schoolId}});

    return subjects;
};

export const createSubjectRepository = async (name: string, schoolId: number) => {
    const newSubject = await Subject.create({ name: name , schoolId: schoolId}).save();

    return newSubject;
};

export const deleteSubjectRepository = async (id: number) => {
    const deletedSubject = await Subject.delete(id);

    return deletedSubject;
};
