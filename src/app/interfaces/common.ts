type IGenericPaginatedResponse<T> = {
    meta: {
        page: number;
        limit: number;
        total: number
    }
    data: T
}

export {
    IGenericPaginatedResponse
};
