import { Model } from 'mongoose'

export type UserTypes = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<UserTypes, Record<string, unknown>>
