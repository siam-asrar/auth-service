import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectId } from 'mongoose';
import catchAsync from '../../shared/catchAsync';
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
    const { limit } = req.query
    const result: IAuth[] | null = await AuthService.availableAuth(parseInt(limit as string | '0'))

    next()

    sendResponse(res, {
        success: true,
        message: `Showing ${limit == '0' ? 'all' : limit} Auth`,
        statusCode: httpStatus.OK,
        data: result
    })
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

    next()

    sendResponse(res, {
        success: true,
        message: `Auth was successfully deleted!`,
        statusCode: httpStatus.OK,
        data: result
    })
})

export const AuthController = {
    getAvailableAuth,
    createAuth,
    updateSingleAuth,
    deleteSingleAuth
}
