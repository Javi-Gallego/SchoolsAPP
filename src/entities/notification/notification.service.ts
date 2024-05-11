import { Request } from "express";
import {
  createNotificationRepository,
  getNotificationsRepository,
} from "./notification.repository";
import { ValidationError } from "../../utils/handleError";

export interface NotificationFilter {
  stageId: number;
  courseId?: number;
  schoolId?: number;
}

export const getNotificationsService = async (req: Request) => {
  const queryFilter: NotificationFilter = {} as NotificationFilter;
console.log(req.query);
  if (!req.query.schoolId) {
    throw new ValidationError("SchoolId must be selected");
  }

  if (req.query.stageId && typeof req.query.stageId === "string") {
    queryFilter.stageId = parseInt(req.query.stageId);
  }
  if (req.query.courseId && typeof req.query.courseId === "string") {
    queryFilter.courseId = parseInt(req.query.courseId);
  }
  if (req.query.schoolId && typeof req.query.schoolId === "string") {
    queryFilter.schoolId = parseInt(req.query.schoolId);
  }

  const notifications = await getNotificationsRepository(queryFilter);

  return notifications;
};

export const createNotificationService = async (req: Request) => {
  const { title, message, schoolId, stageId, courseId, publisherId } = req.body;
  console.log(req.body);
  if (!title || !message || !schoolId || !publisherId) {
    throw new ValidationError("Missing fields");
  }

  const event = await createNotificationRepository(
    title,
    message,
    schoolId,
    stageId,
    courseId,
    publisherId
  );

  return event;
};
