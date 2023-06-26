import mongoose from "mongoose";
import IGenericErrorMessage from "../interfaces/error";

const handleCastError = (err: mongoose.Error.CastError) => {
    const errors: IGenericErrorMessage[] = [
        {
            path: err?.path,
            message: 'Invalid Id'
        }
    ]


    const statusCode = 400;

    return {
        statusCode,
        message: 'Cast Error',
        errMessage: errors,
    }
}

export default handleCastError