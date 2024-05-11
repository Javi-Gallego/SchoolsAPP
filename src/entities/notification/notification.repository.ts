import { IsNull } from "typeorm";
import { Notification } from "./notification.model";
import { NotificationFilter } from "./notification.service";

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
    order: {
      createdAt: "DESC",
    },
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
    console.log("notification", notification);
    await notification.save();

    return notification;
  } catch (error) {
    console.log(error);
  }
};
