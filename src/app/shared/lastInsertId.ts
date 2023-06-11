import { Model, ObjectId } from "mongoose"

const lastInsertId = async <T>(model: Model<T>): Promise<unknown | ObjectId> => {
    const lastUser = await model.find({}, { createdAt: 1, _id: 1 })
        .sort({
            createdAt: -1,
        })
        .limit(1)
        .lean()
    return lastUser
}

export default lastInsertId