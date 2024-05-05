import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Course } from "../course/course.model"
import { User } from "../user/user.model"

@Entity("course_users")
export class CourseUser extends BaseEntity{

    @PrimaryColumn( { name: "course_id" } )
    courseId!: number

    @PrimaryColumn( { name: "user_id" } )
    userId!: number

    @ManyToOne(() => Course, (course) => course.courseUser)
    @JoinColumn({name: "course_id"})
    courseU!: Course

    @ManyToOne(() => User, (user) => user.student)
    @JoinColumn({name: "user_id"})
    Student!: User
}