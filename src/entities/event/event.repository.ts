import { IsNull } from "typeorm";
import { Event } from "./event.model";
import { EventFilter } from "./event.service";
import dayjs from "dayjs";

export const getEventsRepository = async (queryFilter: EventFilter) => {
  const { schoolId, stageId, courseId, date } = queryFilter;
 console.log("schoolId: ", schoolId, "stageId: ", stageId, "courseId: ", courseId, "date: ", date);
  const events = await Event.find({
    where: [
      { end: date, schoolId: schoolId, stageId: stageId, courseId: courseId },
      { end: date, schoolId: schoolId, stageId: stageId, courseId: IsNull() },
      { end: date, schoolId: schoolId, stageId: IsNull(), courseId: courseId },
      { end: date, schoolId: schoolId, stageId: IsNull(), courseId: IsNull() },
    ],
    relations: ["publisher", "stage", "course"],
    order: {
      end: "ASC",
    }
  });

  // events.forEach(event => {
  //   event.start = dayjs(event.start).utc().toDate();
  //   event.end = dayjs(event.end).utc().toDate();
  // });
  events.forEach(event => {
    event.start = dayjs.utc(event.start).local().add(2, "hour").toDate();
    event.end = dayjs.utc(event.end).local().add(2, "hour").toDate();
  });

  return events;
};

export const createEventRepository = async (title: string, start: Date, end: Date, description: string, schoolId: number, stageId: number, courseId: number, publisherId: number, backgroundColor: string) => {

  const event = Event.create({
    title,
    start,
    end,
    description,
    schoolId,
    stageId,
    courseId,
    publisherId,
    backgroundColor,
  });

  await event.save();
  console.log("event: ", event);
  return event;
};
