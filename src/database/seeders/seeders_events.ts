import { Event } from "../../entities/event/event.model";
import { AppDataSource } from "../db";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export const eventSeedDatabase = async () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  try {
    await AppDataSource.initialize();

    const event1 = new Event();
    event1.title = "Examen";
    event1.start = dayjs.tz("2024-05-16 02:00:00", "Europe/Madrid").toDate();
    event1.end = dayjs.tz("2024-05-16 02:00:00", "Europe/Madrid").toDate();
    event1.description = "Matemáticas Tema 7";
    event1.publisherId = 11;
    event1.stageId = 1;
    event1.courseId = 1;
    event1.schoolId = 1;
    event1.backgroundColor = "rgb(105, 35, 35)";
    await event1.save();

    const event2 = new Event();
    event2.title = "Trabajo";
    event2.start = new Date("2024-05-13 02:00:00");
    event2.end = new Date("2024-05-13 02:00:00");
    event2.description = "Escrito de la 'Generación del 27' para Literatura";
    event2.publisherId = 12;
    event2.stageId = 1;
    event2.courseId = 1;
    event2.schoolId = 1;
    event2.backgroundColor = "rgb(37, 105, 35)";
    await event2.save();

    const event3 = new Event();
    event3.title = "Excursión";
    event3.start = new Date("2024-05-20 02:00:00");
    event3.end = new Date("2024-05-20 02:00:00");
    event3.description = "Excursión a la playa";
    event3.publisherId = 2;
    event3.stageId = 2;
    event3.schoolId = 1;
    event3.backgroundColor = "rgb(158, 157, 107)";
    await event3.save();

    const event4 = new Event();
    event4.title = "Fiesta";
    event4.start = new Date("2024-05-25 02:00:00");
    event4.end = new Date("2024-05-25 02:00:00");
    event4.description = "Fiesta de la primavera";
    event4.publisherId = 2;
    event4.schoolId = 1;
    event4.backgroundColor = "rgb(248, 149, 56)";
    await event4.save();

    const event5 = new Event();
    event5.title = "Fiesta";
    event5.start = new Date("2024-05-01 02:00:00");
    event5.end = new Date("2024-05-01 02:00:00");
    event5.description = "Día del trabajador";
    event5.publisherId = 2;
    event5.schoolId = 1;
    event5.backgroundColor = "rgb(248, 149, 56)";
    await event5.save();

    const event6 = new Event();
    event6.title = "Reunión";
    event6.start = new Date("2024-05-13 02:00:00");
    event6.end = new Date("2024-05-13 02:00:00");
    event6.description = "Reunión padres segundo trimestre";
    event6.publisherId = 12;
    event6.stageId = 1;
    event6.courseId = 1;
    event6.schoolId = 1;
    event6.backgroundColor = "rgb(35, 60, 105)";
    await event6.save();

    console.log("--------------------------------------------------");
    console.log("---------- Events created successfully -----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};