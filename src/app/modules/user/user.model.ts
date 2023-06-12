import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser, UserModel>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }  // this will set the fields "createdAt" & "updatedAt" by default in Mongo like ObjectId
)

const User = model<IUser, UserModel>('User', userSchema)

export default User
