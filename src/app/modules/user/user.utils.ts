import { User } from './user.model'

// Getting the id of the last entry of the user
export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  return lastUser?.id
}

// Based on the last id, generating incremental id
export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')

  const incrementedId = parseInt(currentId as string) + 1

  return incrementedId
}
