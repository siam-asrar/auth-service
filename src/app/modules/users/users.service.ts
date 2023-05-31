// only db logics here, no req/res

import User from './users.model'
import { IUser } from './users.interface'
import config from '../../../config/index'
import { generateUserId } from './users.utils'

/** requisition:
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
    throw new Error(`Failed to create new user`)
  }

  return createdUser
}

export default {
  createUser,
}
