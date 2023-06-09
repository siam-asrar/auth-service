import { Model } from "mongoose"

export type IUser = {
  id?: string
  email: string
  userName: string
  role?: string
  password: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
