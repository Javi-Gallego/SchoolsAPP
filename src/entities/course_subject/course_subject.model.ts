import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Subject } from "../subject/subject.model"
import { Course } from "../course/course.model"

@Entity("courses_subjects")
export class CourseSubject extends BaseEntity{

    @PrimaryColumn( { name: "course_id" } )
    courseId!: number

    @PrimaryColumn( { name: "subject_id" } )
    subjectId!: number

    @ManyToOne(() => Course, (course) => course.courses)
    @JoinColumn({name: "course_id"})
    course!: Course

    @ManyToOne(() => Subject, (subject) => subject.subjects)
    @JoinColumn({name: "subject_id"})
    subject!: Subject
}