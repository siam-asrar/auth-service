import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }   // this will set the fields "createdAt" & "updatedAt" by default in Mongo like ObjectId
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
