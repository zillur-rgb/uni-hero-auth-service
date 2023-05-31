import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto generated incremental id
  const id = (await generateUserId()).toString()
  user.id = id as string
  // default password
  if (!user?.password) {
    user.password = config.defaultPassword as string
  }
  const createdUser = await User.create(user)

  if (!createdUser) throw new Error('Failed to create user')

  return createdUser
}
