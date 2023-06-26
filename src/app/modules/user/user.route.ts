import express from 'express';
import requestValidator from '../../middleware/requestValidator';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

<<<<<<< HEAD
router.post(
  '/create-student',
  requestValidator(UserValidation.createUserZodSchema),
  UserController.createStudent
);
=======
router.post
    (
        '/create-user',
        requestValidator(UserValidation.createUserZodSchema),
        UserController.createUser
    )
>>>>>>> 225da841bb623845ea5b346ffb8599a1efedf922

router.post(
  '/create-faculty',
  requestValidator(UserValidation.createFacultyZodSchema),
  UserController.createFaculty
);

router.post(
  '/create-admin',
  requestValidator(UserValidation.createAdminZodSchema),
  UserController.createAdmin
);

export const UserRoutes = router;
