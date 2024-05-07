import { Request, Response } from "express";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";
import { createEventService, getEventsService } from "./event.service";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const stages = await getEventsService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Events retrieved succesfully",
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
      "Cant retrieve events",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await createEventService(req);

    res.status(HttpStatus.CREATED).json({
      success: true,
      message: "Event created succesfully",
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
      "Cant create event",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};
