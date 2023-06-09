import { IAuthCode, IAuthTitle } from "./auth.interface";

export const authTitle: IAuthTitle[] =
    [
        'Generic',
        'Staff',
        'Admin'
    ]

export const authCode: IAuthCode[] =
    [
        '01',
        '02',
        '03'
    ]

export const authTitleCodeMapper: {
    [key: string]: string
} = {
    Generic: '01',
    Staff: '02',
    Admin: '03'
}




