import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    role: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
