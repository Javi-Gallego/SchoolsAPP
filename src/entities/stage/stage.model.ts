import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { School } from "../school/school.model"
import { Course } from "../course/course.model"
import { Event } from "../event/event.model"
import { Notification } from "../notification/notification.model"

@Entity("stages")
export class Stage extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "name"})
    name!: string

    @Column({ name: "school_id"})
    schoolId!: number

    @ManyToOne(() => School, (school) => school.stages)
    @JoinColumn({name: "school_id"})
    school!: School

    @OneToMany(() => Course, course => course.stage)
    courses!: Course[]

    @OneToMany(() => Event, event => event.stage)
    events!: Event[]

    @OneToMany(() => Notification, notification => notification.stage)
    notifications!: Notification[]
}