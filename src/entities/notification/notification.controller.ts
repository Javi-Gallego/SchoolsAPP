import { Request, Response } from "express";
import {
  createNotificationService,
  getNotificationsService,
} from "./notification.service";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";

export const getNotifications = async (req: Request, res: Response) => {
  try {
    const stages = await getNotificationsService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Notifications retrieved succesfully",
      data: stages,
    });
  } catch (error) {
    if (
      error instanceof ValidationError ||
      error instanceof ForbiddenError ||
      error instanceof NotFoundError
    ) {
      return handleError(
        res,
        error.message,
        HttpStatus.BAD_REQUEST,
        error.name
      );
    }
    handleError(
      res,
      "Cant retrieve notifications",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};

export const createNotification = async (req: Request, res: Response) => {
  try {
    const event = await createNotificationService(req);

    res.status(HttpStatus.CREATED).json({
      success: true,
      message: "Notification created succesfully",
      data: event,
    });
  } catch (error) {
    if (
      error instanceof ValidationError ||
      error instanceof ForbiddenError ||
      error instanceof NotFoundError
    ) {
      return handleError(
        res,
        error.message,
        HttpStatus.BAD_REQUEST,
        error.name
      );
    }
    handleError(
      res,
      "Cant create notification",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};
