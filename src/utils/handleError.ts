import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export class ValidationError extends Error {
  name: string;
  status: HttpStatus;

  constructor(message: string) {
    super(message);
    this.name = "Validation Error";
    this.status = HttpStatus.BAD_REQUEST;
  }
}

export class ForbiddenError extends Error {
  name: string;
  status: HttpStatus;

  constructor(message: string) {
    super(message);
    this.name = "Forbidden Error";
    this.status = HttpStatus.FORBIDDEN;
  }
}

export class NotFoundError extends Error {
  name: string;
  status: HttpStatus;

  constructor(message: string) {
    super(message);
    this.name = "Not Found Error";
    this.status = HttpStatus.NOT_FOUND;
  }
}

export const handleError = (
  res: Response,
  errorMessage: string,
  errorStatus: HttpStatus,
  errorName: string
) => {
  res.status(errorStatus).json({
    success: false,
    name: errorName,
    message: errorMessage,
  });
};
