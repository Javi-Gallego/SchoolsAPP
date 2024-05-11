import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { School } from "../school/school.model"
import { Course } from "../course/course.model"
import { Stage } from "../stage/stage.model"
import { User } from "../user/user.model"

@Entity("notifications")
export class Notification extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "title"})
    title!: string

    @Column({ name: "message"})
    message!: string

    @Column({ name: "publisher_id"})
    publisherId!: number

    @Column({ name: "stage_id"})
    stageId!: number

    @Column({ name: "course_id"})
    courseId!: number

    @Column({ name: "school_id"})
    schoolId!: number

    @Column({ name: "viewers", type: "simple-array", default: ""})
    viewers!: string[]

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false},)
    updatedAt!: Date

    @ManyToOne(() => School, (school) => school.notifications)
    @JoinColumn({name: "school_id"})
    school!: School

    @ManyToOne(() => Stage, (stage) => stage.notifications)
    @JoinColumn({name: "stage_id"})
    stage!: Stage

    @ManyToOne(() => Course, (course) => course.notifications)
    @JoinColumn({name: "course_id"})
    course!: Course

    @ManyToOne(() => User, (user) => user.notifications)
    @JoinColumn({name: "publisher_id"})
    publisher!: User
}