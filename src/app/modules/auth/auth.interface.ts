import { Model } from "mongoose";

export type IAuthTitle =
    | 'Generic'
    | 'Staff'
    | 'Admin'

export type IAuthCode =
    | '01'
    | '02'
    | '03'

export type IAuth = {
    title: IAuthTitle;
    code: IAuthCode;
    userId?: number;
}

export type AuthModel = Model<IAuth, Record<string, unknown>>
