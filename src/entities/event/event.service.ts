import { Request } from "express";
import { getEventsRepository } from "./event.repository";

export interface EventFilter {
  stageId: number;
  courseId: number;
  schoolId: number;
}

export const getEventsService = async (req: Request) => {
  const queryFilter: EventFilter = {} as EventFilter;
  if (req.query.stageId && typeof req.query.stageId === "string") {
    queryFilter.stageId = parseInt(req.query.stageId);
  }
  if (req.query.courseId && typeof req.query.courseId === "string") {
    queryFilter.courseId = parseInt(req.query.courseId);
  }
  if (req.query.schoolId && typeof req.query.schoolId === "string") {
    queryFilter.schoolId = parseInt(req.query.schoolId);
  }

  const events = await getEventsRepository(queryFilter);

  return events;
};
