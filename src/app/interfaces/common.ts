import IGenericErrorMessage from "./IGenericErrorMessage";

type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errMessage: IGenericErrorMessage[]
}

export default IGenericErrorResponse