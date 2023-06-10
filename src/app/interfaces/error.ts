type IGenericErrorMessage = {
    path: string | number;
    message: string;
};

type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errMessage: IGenericErrorMessage[]
}

export {
    IGenericErrorMessage,
    IGenericErrorResponse
};

