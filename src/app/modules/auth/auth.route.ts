import express from 'express';
import requestValidator from '../../middleware/requestValidator';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/login',
  requestValidator(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.post(
  '/refresh-token',
  requestValidator(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

// router.get('/', AdminController.getAllAdmins);

// router.delete('/:id', AdminController.deleteAdmin);

// router.patch(
//   '/:id',
//   requestValidator(AdminValidation.updateAdmin),
//   AdminController.updateAdmin
// );

export const AuthRoutes = router;
