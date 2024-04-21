import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { User } from "../user/user.model"

@Entity("parents_students")
export class ParentStudent extends BaseEntity{

    @PrimaryColumn( { name: "parent_id" } )
    parentId!: number

    @PrimaryColumn( { name: "student_id" } )
    studentId!: number

    @ManyToOne(() => User, (parent) => parent.parentid)
    @JoinColumn({name: "parent_id"})
    parent!: User

    @ManyToOne(() => User, (student) => student.studentid)
    @JoinColumn({name: "student_id"})
    student!: User
}