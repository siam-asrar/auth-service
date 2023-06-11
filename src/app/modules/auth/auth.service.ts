import httpStatus from 'http-status'
import { ObjectId, SortOrder } from 'mongoose'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import APIError from '../../errors/ApiError'
import { IGenericPaginatedResponse } from '../../interfaces/common'
import { IPaginationOptions } from '../../interfaces/pagination'
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

const availableAuth = async (pagination: IPaginationOptions): Promise<IGenericPaginatedResponse<IAuth[]>> => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelpers.calculatePagination(pagination)
    const sortConditions: { [key: string]: SortOrder } = {}

    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder
    }
    const result = await Auth?.find({}).sort(sortConditions)?.skip(skip)?.limit(limit)
    const total = await Auth?.countDocuments()

    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    }
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

