import httpStatus from 'http-status'
import { ObjectId } from 'mongoose'
import APIError from '../../errors/ApiError'
import { authTitleCodeMapper } from './auth.constants'
import { IAuth } from './auth.interface'
import Auth from './auth.model'

const createdAuth = async (auth: IAuth): Promise<IAuth | null> => {
    if (authTitleCodeMapper[auth.title] !== auth.code) {
        throw new APIError(httpStatus.BAD_REQUEST, 'Failed to create new Auth due to mismatching params')
    }
    const result = await Auth.create(auth)
    return result
}

const availableAuth = async (limit: number) => {
    const result = await Auth?.find({}).sort({ year: -1 }).limit(limit)
    return result
}

const updateAuth = async (_id: ObjectId, auth: IAuth): Promise<object | undefined> => {
    const result = await Auth?.updateOne(_id, auth)
    if (result.modifiedCount) {
        const data = await Auth?.findOne(_id)
        return { result: data, data: result }
    } else {
        throw new APIError(httpStatus.BAD_REQUEST, `Failed to update Auth by ${_id} due to bad params`)
    }
}

const deleteAuth = async (_id: ObjectId): Promise<object | undefined> => {
    const result = await Auth?.deleteOne(_id)
    if (result.deletedCount) {
        const data = await Auth?.find({})
        return { result, data }
    } else {
        throw new APIError(httpStatus.BAD_REQUEST, `Failed to update Auth by ${_id} due to bad params`)
    }
}

export const AuthService = {
    availableAuth,
    createdAuth,
    updateAuth,
    deleteAuth
}

