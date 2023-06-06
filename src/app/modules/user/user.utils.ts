import User from './user.model'

export const findLastUserId = async () => {
  // query (happens on) the models
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    // for faster querying - https://mongoosejs.com/docs/tutorials/lean.html
    .lean()
  return lastUser?.id
}

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0') //00000
  const incrementedId = parseInt(currentId) + 1   //increment by 1
  return incrementedId.toString().padStart(5, '0')
}
