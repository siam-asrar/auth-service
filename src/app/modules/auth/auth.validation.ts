import { z } from "zod"
import { authCode, authTitle } from "./auth.constants"

const createAuthZodSchema = z.object({
    body: z.object({
        title: z.enum(
            [...authTitle] as [string, ...string[]
            ], { required_error: 'Title is required' }
        ),
        code: z.enum(
            [...authCode] as [string, ...string[]
            ], { required_error: 'Code is required' }
        ),
        userId: z.number().optional()
    })
})

const deleteOrUpdateAuthZodSchema = z.object({
    params: z.object({
        _id: z.string()
    }, {
        required_error: 'Object Id is required'
    }
    )
})

export const AuthValidation = {
    createAuthZodSchema,
    deleteOrUpdateAuthZodSchema
}