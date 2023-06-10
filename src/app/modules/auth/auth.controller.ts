import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectId } from 'mongoose';
import { paginationFields } from '../../constants/pagination';
import { IGenericPaginatedResponse } from '../../interfaces/common';
import { IPaginationOptions } from '../../interfaces/pagination';
import catchAsync from '../../shared/catchAsync';
import pick from '../../shared/pick';
import sendResponse from '../auth../../../shared/sendResponse';
import { IAuth } from './auth.interface';
import { AuthService } from './auth.service';

const createAuth = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { ...Auth } = req.body
    const result = await AuthService.createdAuth(Auth)

    next()

    sendResponse(res, {
        success: true,
        message: 'Auth created successfully!',
        statusCode: httpStatus.OK,
        data: result
    })
})

const getAvailableAuth = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const query = req.query
    const paginationOptions: IPaginationOptions = pick(query, paginationFields)


    const result: IGenericPaginatedResponse<IAuth[]> = await AuthService.availableAuth(paginationOptions)

    sendResponse(res, {
        success: true,
        message: `Showing ${result?.meta?.limit} of ${result?.meta?.total} Academic Semesters`,
        statusCode: httpStatus.OK,
        meta: result.meta,
        data: result.data
    })

    next()

})

const updateSingleAuth = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { _id } = req.params
    const { ...payload } = req.body

    const result = await AuthService.updateAuth(_id as unknown as ObjectId, payload)

    next()

    sendResponse(res, {
        success: true,
        message: `Auth ${_id} successfully updated!`,
        statusCode: httpStatus.OK,
        data: result
    })
})

const deleteSingleAuth = catchAsync(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { _id } = req.params

    const result = await AuthService.deleteAuth(_id as unknown as ObjectId)

    sendResponse(res, {
        success: true,
        message: `Auth was successfully deleted!`,
        statusCode: httpStatus.OK,
        data: result
    })

    next()

})

export const AuthController = {
    getAvailableAuth,
    createAuth,
    updateSingleAuth,
    deleteSingleAuth
}
