import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { School } from "../school/school.model"
import { Course } from "../course/course.model"
import { Stage } from "../stage/stage.model"
import { User } from "../user/user.model"

@Entity("events")
export class Event extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "title"})
    title!: string

    @Column({ name: "start"})
    start!: Date

    @Column({ name: "end"})
    end!: Date

    @Column({ name: "description"})
    description!: string

    @Column({ name: "publisher_id"})
    publisherId!: number

    @Column({ name: "stage_id"})
    stageId!: number

    @Column({ name: "course_id"})
    courseId!: number

    @Column({ name: "school_id"})
    schoolId!: number

    @Column({ name: "backgroundColor" })
    backgroundColor!: string

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false},)
    updatedAt!: Date

    @ManyToOne(() => School, (school) => school.events)
    @JoinColumn({name: "school_id"})
    school!: School

    @ManyToOne(() => Stage, (stage) => stage.events)
    @JoinColumn({name: "stage_id"})
    stage!: Stage

    @ManyToOne(() => Course, (course) => course.events)
    @JoinColumn({name: "course_id"})
    course!: Course

    @ManyToOne(() => User, (user) => user.events)
    @JoinColumn({name: "publisher_id"})
    publisher!: User
}