import IGenericErrorMessage from "./error";

type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errMessage: IGenericErrorMessage[]
}

type IGenericPaginatedResponse<T> = {
    meta: {
        page: number;
        limit: number;
        total: number
    }
    data: T
}

export {
    IGenericErrorResponse,
    IGenericPaginatedResponse
};
