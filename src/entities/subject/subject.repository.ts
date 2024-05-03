import { Subject } from "./subject.model";

export const createSubjectRepository = async (name: string) => {
    const newSubject = await Subject.create({ name }).save();

    return newSubject;
};
