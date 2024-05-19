import { Request } from "express";
import { createEventRepository, getEventsRepository } from "./event.repository";
import { FindOperator, MoreThanOrEqual } from "typeorm";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export interface EventFilter {
  stageId: number;
  courseId: number;
  schoolId: number;
  date: FindOperator<Date>;
}

export const getEventsService = async (req: Request) => {
  const queryFilter: EventFilter = {} as EventFilter;

  let FirstDayOfYear = dayjs().startOf("year").tz("Europe/Madrid").toDate();

  if (req.query.stageId && typeof req.query.stageId === "string") {
    queryFilter.stageId = parseInt(req.query.stageId);
  }
  if (req.query.courseId && typeof req.query.courseId === "string") {
    queryFilter.courseId = parseInt(req.query.courseId);
  }
  if (req.query.schoolId && typeof req.query.schoolId === "string") {
    queryFilter.schoolId = parseInt(req.query.schoolId);
  }

  if (req.query.limitDate === "true") {
    queryFilter.date = MoreThanOrEqual(new Date());
  } else {
    queryFilter.date = MoreThanOrEqual(new Date(FirstDayOfYear));
  }

  const events = await getEventsRepository(queryFilter);

  return events;
};

export const createEventService = async (req: Request) => {
  const { title, start, end, description, schoolId, stageId, courseId, publisherId, backgroundColor } = req.body;

  if (!title || !start || !end || !schoolId || !stageId || !courseId || !publisherId || !backgroundColor) {
    throw new Error("Missing required fields");
  }
  
  const event = await createEventRepository(title, start, end, description, schoolId, stageId, courseId, publisherId, backgroundColor);

  return event;
};
