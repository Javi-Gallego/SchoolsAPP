import { Request, Response } from "express";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";
import { getMessagesService } from "./message.service";

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await getMessagesService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Messages retrieved succesfully",
      data: messages,
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
      "Cant retrieve messages",
      HttpStatus.INTERNAL_SERVER_ERROR,
      ""
    );
  }
};
