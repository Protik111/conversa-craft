import { z } from 'zod'

export const UserSchema = z.object({
    profilePhoto: z.string().url().nonempty(),
    name: z
        .string().trim()
        .min(2, { message: "Name must be 2 or more characters long" }),
    username: z
        .string()
        .min(2, { message: "Username must be 2 or more characters long" })
        .max(30, { message: "Username must not be than 30 characters long" }),
    bio: z
        .string()
        .min(2, { message: "Bio must be 2 or more characters long" })
        .max(1000, { message: "B must not be than 1000 characters long" }),

})