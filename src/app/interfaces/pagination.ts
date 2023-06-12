import { SortOrder } from "mongoose";

// there may or may not be pagination on get req
export type IPaginationOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: SortOrder;
}

export type IPaginationOptionResults = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: SortOrder;
}
