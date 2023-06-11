import lastInsertId from '../../shared/lastInsertId'
import User from './user.model'

export const generateUserId = async () => {
  const latestId = await lastInsertId(User)
  const currentId = User.findOne({ _id: { $eq: latestId } }, { id: 1, _id: 0 }) || (0).toString().padStart(5, '0')
  const incrementedId = parseInt(currentId as unknown as string) + 1
  return incrementedId.toString().padStart(5, '0')
}
