import { IsNull } from "typeorm";
import { Notification } from "./notification.model";
import { NotificationFilter } from "./notification.service";
import dayjs from "dayjs";

export const getNotificationsRepository = async (
  queryFilter: NotificationFilter
) => {
  const { schoolId, stageId, courseId } = queryFilter;

  const notifications = await Notification.find({
    where: [
      { schoolId: schoolId, stageId: stageId, courseId: courseId },
      { schoolId: schoolId, stageId: stageId, courseId: IsNull() },
      { schoolId: schoolId, stageId: IsNull(), courseId: courseId },
      { schoolId: schoolId, stageId: IsNull(), courseId: IsNull() },
    ],
    relations: ["publisher", "stage", "course"],
    select: ["createdAt", "title", "message", "publisher", "stage", "course", "id"],
    order: {
      createdAt: "DESC",
    },
  });

  notifications.forEach(notification => {
    notification.createdAt = dayjs.utc(notification.createdAt).local().add(2, "hour").toDate();
  });

  return notifications;
};

export const createNotificationRepository = async (
  title: string,
  message: string,
  schoolId: number,
  stageId: number,
  courseId: number,
  publisherId: number
) => {
  try {
    const notification = Notification.create({
      title,
      message,
      schoolId,
      stageId,
      courseId,
      publisherId,
    });

    await notification.save();

    return notification;
  } catch (error) {
    console.log(error);
  }
};
