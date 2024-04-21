import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Roles1713601089579 } from "./migrations/1713601089579-roles";
import { Users1713612060719 } from "./migrations/1713612060719-users";
import { Schools1713457310123 } from "./migrations/1713457310123-schools";
import { UsersRoles1713631471268 } from "./migrations/1713631471268-users_roles";
import { Stages1713623359112 } from "./migrations/1713623359112-stages";
import { Subjects1713624214729 } from "./migrations/1713624214729-subjects";
import { Courses1713623781362 } from "./migrations/1713623781362-courses";
import { CoursesSubjects1713698037213 } from "./migrations/1713698037213-courses_subjects";
import { Events1713624323721 } from "./migrations/1713624323721-events";
import { Notifications1713626917066 } from "./migrations/1713626917066-notifications";
import { Messages1713628669180 } from "./migrations/1713628669180-messages";
import { ParentStudent1713631216211 } from "./migrations/1713631216211-parent_student";
import { Role } from "../entities/role/role.model";
import { User } from "../entities/user/user.model";
import { School } from "../entities/school/school.model";
import { UserRole } from "../entities/user_role/user_role.model";
import { Stage } from "../entities/stage/stage.model";
import { Subject } from "../entities/subject/subject.model"
import { Course } from "../entities/course/course.model";
import { CourseSubject } from "../entities/course_subject/course_subject.model";
import { Event } from "../entities/event/event.model";
import { Notification } from "../entities/notification/notification.model";
import { Message } from "../entities/message/message.model";
import { ParentStudent } from "../entities/parent_student/parent_student.model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "test",
  entities: [School, Role, User, UserRole, Stage, Subject, Course, CourseSubject, Event, Notification, Message, ParentStudent],
  migrations: [Schools1713457310123, Roles1713601089579, Users1713612060719, UsersRoles1713631471268, Stages1713623359112, Subjects1713624214729, Courses1713623781362, CoursesSubjects1713698037213, Events1713624323721, Notifications1713626917066, Messages1713628669180, ParentStudent1713631216211 ],
  synchronize: false,
  logging: false,
});
