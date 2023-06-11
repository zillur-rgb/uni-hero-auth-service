import { Model, Schema, model } from 'mongoose'
import { UserTypes } from './user.type'

type UserModel = Model<UserTypes, object>

const userSchema = new Schema<UserTypes>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const User = model<UserTypes, UserModel>('User', userSchema)
