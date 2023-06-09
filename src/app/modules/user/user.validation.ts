import { z } from "zod"

const createUserZodSchema = z.object({
    body: z.object({
        id: z.string().optional(),
        userName: z.string({
            required_error: 'User Name is required'
        }),
        email: z.string({
            required_error: 'Email is required'
        }),
        role: z.string().optional(),
        password: z.string({
            required_error: 'Password is required'
        }),
    })
})

export const UserValidation = {
    createUserZodSchema
}