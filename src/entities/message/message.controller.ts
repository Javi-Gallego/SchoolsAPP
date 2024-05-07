import { Request, Response } from "express";
import {
  ForbiddenError,
  HttpStatus,
  NotFoundError,
  ValidationError,
  handleError,
} from "../../utils/handleError";
import { createMessageService, getMessagesService, updateMessageService } from "./message.service";

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

export const createMessage = async (req: Request, res: Response) => {
    try {
        const message = await createMessageService(req);
    
        res.status(HttpStatus.OK).json({
        success: true,
        message: "Message created succesfully",
        data: message,
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
        "Cant create message",
        HttpStatus.INTERNAL_SERVER_ERROR,
        ""
        );
    }
};

export const updateMessage = async (req: Request, res: Response) => {
    try {
        const messages = await updateMessageService(req);
    
        res.status(HttpStatus.OK).json({
        success: true,
        message: "Messages updated succesfully",
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
        "Cant update messages",
        HttpStatus.INTERNAL_SERVER_ERROR,
        ""
        );
    }
};
