<<<<<<< HEAD
=======
import { ZodError, ZodIssue } from "zod";
import { IGenericErrorResponse } from "../interfaces/common";
import IGenericErrorMessage from "../interfaces/error";

const handleZodError = (err: ZodError): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = err.issues.map((i: ZodIssue) => {
        return {
            path: i.path as unknown as string,
            message: i.message,
        }
    })

    const statusCode = 400;

    return {
        statusCode: statusCode,
        message: 'Validation Error',
        errMessage: errors
    }
}

export default handleZodError
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922
