import config from '../../../config'
import { successLogger } from '../../../shared/logger'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

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

  if (!createdUser) throw new Error('Failed to create user')

  return createdUser
}

export default {
  createUser,
}
