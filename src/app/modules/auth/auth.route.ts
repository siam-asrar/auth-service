import express from 'express'
import requestValidator from '../../middleware/requestValidator'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'

const router = express.Router()

router
    .get('/',
        AuthController
            .getAvailableAuth
    )
    .post('/',
        requestValidator(
            AuthValidation
                .createAuthZodSchema
        ),
        AuthController
            .createAuth
    )
    .patch('/:_id',
        requestValidator(
            AuthValidation
                .deleteOrUpdateAuthZodSchema
        ),
        AuthController
            .updateSingleAuth
    )
    .delete('/:_id',
        requestValidator(
            AuthValidation
                .deleteOrUpdateAuthZodSchema
        ),
        AuthController
            .deleteSingleAuth
    )

export const AuthRoutes = router