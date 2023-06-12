import config from '../../config/index'
import APIError from '../../errors/ApiError'
import { IUser } from './user.interface'
import User from './user.model'
import { generateUserId } from './user.utils'

/** requisition: resides in service :nly db logics here, no req/res
 * auto generated incremental id
 * default pass
 */

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string // default type alias
  }

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new APIError(400, 'Failed to create new user')
  }

  return createdUser
}

export const UserService = {
  createUser
}
