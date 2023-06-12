import config from '../../../config'
import ApiError from '../../../errorHandlers/ApiError'
import { successLogger } from '../../../shared/logger'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto generated incremental id
  const id = (await generateUserId()).toString()
  user.id = id as string
  // default password
  if (!user?.password) {
    user.password = config.default_user_pass as string
  }
  successLogger.info('user.password', config.default_user_pass)

  const createdUser = await User.create(user)

  if (!createdUser) throw new ApiError(400, 'Failed to create user')

  return createdUser
}

export const UserService = {
  createUser,
}
