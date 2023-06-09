import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import config from "../config/index";
import APIError from "../errors/ApiError";
import handleValidationError from "../errors/handleValidationError";
import IGenericErrorMessage from "../interfaces/IGenericErrorMessage";
import { errorLogger } from "../shared/logger";
import handleZodValidationError from "./handleZodError";

const globalErrorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
    if (config.env == 'development') {
        // eslint-disable-next-line no-console
        console.log('Global Error Handler', err)
    } else {
        errorLogger.error('Global Error Handler', err)
    }

    let statusCode = 500;
    let message = 'Something went wrong';
    let errMessages: IGenericErrorMessage[] = [];

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

    res.status(statusCode).json({
        success: false,
        message,
        errMessages,
        stack: config.env !== 'production' ? err?.stack : undefined
    });

    next()
}
export default globalErrorHandler