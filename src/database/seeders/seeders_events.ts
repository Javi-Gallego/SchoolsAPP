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
    event1.start = dayjs.tz("2024-05-16", "Europe/Madrid").toDate();
    event1.end = dayjs.tz("2024-05-16", "Europe/Madrid").toDate();
    event1.description = "Matemáticas Tema 7";
    event1.publisherId = 2;
    event1.stageId = 1;
    event1.courseId = 1;
    event1.schoolId = 1;
    event1.backgroundColor = "red";
    await event1.save();

    const event2 = new Event();
    event2.title = "Trabajo";
    event2.start = new Date("2024-05-13");
    event2.end = new Date("2024-05-13");
    event2.description = "Escrito de la 'Generación del 27' para Literatura";
    event2.publisherId = 2;
    event2.stageId = 1;
    event2.courseId = 1;
    event2.schoolId = 1;
    event2.backgroundColor = "green";
    await event2.save();

    console.log("--------------------------------------------------");
    console.log("---------- Events created successfully -----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};