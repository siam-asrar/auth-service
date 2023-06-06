import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  /** req & response: resides in controller
    * req params
    * res details
   */
  try {
    const user = req.body
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUser
}