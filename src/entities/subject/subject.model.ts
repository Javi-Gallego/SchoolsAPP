import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { CourseSubject } from "../course_subject/course_subject.model"

@Entity("subjects")
export class Subject extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "name"})
    name!: string

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false},)
    updatedAt!: Date

    @OneToMany(() => CourseSubject, (coursesubject) => coursesubject.subject)
    subjects!: CourseSubject[]
}