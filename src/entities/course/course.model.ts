import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseSubject } from "../course_subject/course_subject.model";
import { Stage } from "../stage/stage.model";
import { User } from "../user/user.model";
import { Event } from "../event/event.model";
import { Notification } from "../notification/notification.model";
import { CourseUser } from "../course_user/course_user.model";

@Entity("courses")
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "stage_id" })
  stageId!: number;

  @Column({ name: "year" })
  year!: string;

  @Column({ name: "tutor_id" })
  tutorId!: number;

  @Column({
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
    select: false,
  })
  createdAt!: Date;

  @Column({
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
    select: false,
  })
  updatedAt!: Date;

  @ManyToOne(() => Stage, (stage) => stage.courses)
  @JoinColumn({ name: "stage_id" })
  stage!: Stage;

  @OneToMany(() => CourseSubject, (courseSubject) => courseSubject.courseS)
  courseSubject!: CourseSubject[];

  @OneToMany(() => CourseUser, (courseUser) => courseUser.courseU)
  courseUser!: CourseUser[];

  @OneToOne(() => User)
  @JoinColumn({ name: "tutor_id" })
  tutor!: User;

  @OneToMany(() => Event, (event) => event.course)
  events!: Event[];

  @OneToMany(() => Notification, (notification) => notification.course)
  notifications!: Notification[];
}
