import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"

const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API not found'
            }
        ]
    })
    next()
}

export default notFound