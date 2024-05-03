import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { CourseSubject } from "../course_subject/course_subject.model"
import { School } from "../school/school.model"

@Entity("subjects")
export class Subject extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "name"})
    name!: string
    
    @Column({ name: "school_id"})
    schoolId!: number

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false},)
    updatedAt!: Date

    @ManyToOne(() => School, (school) => school.subjects)
    @JoinColumn({name: "school_id"})
    school!: School

    @OneToMany(() => CourseSubject, (coursesubject) => coursesubject.subject)
    subjects!: CourseSubject[]
}