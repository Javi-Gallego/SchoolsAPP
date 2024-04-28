import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserRole } from "../user_role/user_role.model"
import { School } from "../school/school.model"
import { Course } from "../course/course.model"
import { Event } from "../event/event.model"
import { ParentStudent } from "../parent_student/parent_student.model"
import { Notification } from "../notification/notification.model"
import { Message } from "../message/message.model"

@Entity("users")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "first_name"})
    firstName!: string

    @Column({ name: "last_name"})
    lastName!: string
    
    @Column({ name: "second_last_name"})
    secondLastName!: string
    
    @Column({ name: "birthday"})
    birthday!: Date

    @Column({ name: "address"})
    address!: string

    @Column({ name: "email"})
    email!: string

    @Column({ name: "phone"})
    phone!: number

    @Column({ name: "password_hash", select: false})
    passwordHash!: string

    @Column({ name: "profile_photo", default: "/uploads/profile/userphoto.png"})
    profilePhoto!: string

    @Column({ name: "school_id"})
    schoolId!: number

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false},)
    updatedAt!: Date

    @ManyToOne(() => School, (school) => school.users)
    @JoinColumn({name: "school_id"})
    school!: School

    @OneToMany(() => UserRole, (userrole) => userrole.user)
    roles!: UserRole[]

    @OneToMany(() => ParentStudent, (parent) => parent.parent)
    parentid!: ParentStudent[]

    @OneToMany(() => ParentStudent, (student) => student.student)
    studentid!: ParentStudent[]

    @OneToOne(() => Course, course => course.tutor)
    course!: Course;

    @OneToMany(() => Event, event => event.publisher)
    events!: Event[]

    @OneToMany(() => Notification, notification => notification.publisher)
    notifications!: Notification[]

    @OneToMany(() => Message, message => message.author)
    authormessages!: Message[]

    @OneToMany(() => Message, message => message.receiver)
    receivermessages!: Message[]
}