import config from '../../../config'
import { User } from './user.model'
import { UserTypes } from './user.type'
import { generateUserId } from './user.utils'

const createUser = async (user: UserTypes): Promise<UserTypes | null> => {
  // Auto generated incremental id
  const id = (await generateUserId()).toString()
  user.id = id as string
  // default password
  if (!user?.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createdUser) throw new Error('Failed to create user')

  return createdUser
}

export default {
  createUser,
}
