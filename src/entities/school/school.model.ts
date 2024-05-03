import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Stage } from "../stage/stage.model"
import { User } from "../user/user.model"
import { Event } from "../event/event.model"
import { Notification } from "../notification/notification.model"
import { Subject } from "../subject/subject.model"

@Entity("schools")
export class School extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "name"})
    name!: string

    @Column({ name: "address"})
    address!: string

    @Column({ name: "phone"})
    phone!: number

    @Column({ name: "logo"})
    logo!: string

    @Column({ name: "web"})
    web!: string

    @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP", select: false})
    createdAt!: Date

    @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", select: false})
    updatedAt!: Date

    @OneToMany(() => User, user => user.school)
    users!: User[]

    @OneToMany(() => Stage, stage => stage.school)
    stages!: Stage[]

    @OneToMany(() => Subject, subject => subject.school)
    subjects!: Subject[]

    @OneToMany(() => Event, event => event.school)
    events!: Event[]

    @OneToMany(() => Notification, notification => notification.school)
    notifications!: Notification[]
}