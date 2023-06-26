<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import handleValidationError from '../../errors/handleValidationError';

import { ZodError } from 'zod';
import handleCastError from '../../errors/handleCastError';
import handleZodError from '../../errors/handleZodError';
import { IGenericErrorMessage } from '../../interfaces/error';
import { errorLogger } from '../../shared/logger';
=======
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import config from "../config/index";
import APIError from "../errors/ApiError";
import handleCastError from "../errors/handleCastError";
import handleValidationError from "../errors/handleValidationError";
import IGenericErrorMessage from "../interfaces/error";
import { errorLogger } from "../shared/logger";
import handleZodValidationError from "./handleZodError";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const globalErrorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    if (config.env == 'development') {
        // eslint-disable-next-line no-console
        console.log('Global Error Handler', err)
    } else {
        errorLogger.error('Global Error Handler', err)
    }
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === 'development'
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { error })
    : errorLogger.error(`🐱‍🏍 globalErrorHandler ~~`, error);

<<<<<<< HEAD
  let statusCode = 500;
  let message = 'Something went wrong !';
  let errorMessages: IGenericErrorMessage[] = [];
=======
    if (err?.name === 'ValidationError') {
        const simplifiedError = handleValidationError(err)
        statusCode = simplifiedError.statusCode
        message = simplifiedError.message
        errMessages = simplifiedError.errMessage
    } else if (err instanceof ZodError) {
        const simplifiedError = handleZodValidationError(err);
        statusCode = simplifiedError.statusCode
        message = simplifiedError.message
        errMessages = simplifiedError.errMessage
    }
    else if (err.name === 'CastError') {
        const simplifiedError = handleCastError(err)
        statusCode = simplifiedError.statusCode
        message = simplifiedError.message
        errMessages = simplifiedError.errMessage
    }
    else if (err instanceof APIError) {
        statusCode = err.statusCode
        message = err.message
        errMessages = err?.message ? [
            {
                path: '',
                message: err?.message
            }
        ] : []
    }
    else if (err instanceof Error) {
        message = err.message
        errMessages = err?.message ? [
            {
                path: '',
                message: err?.message
            }
        ] : []
    }
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
        {
          path: '',
          message: error?.message,
        },
      ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
        {
          path: '',
          message: error?.message,
        },
      ]
      : [];
  }

<<<<<<< HEAD
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
};

export default globalErrorHandler;

//path:
//message:

// 2025 Fall

// 2025 and
=======
}
export default globalErrorHandler
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922
