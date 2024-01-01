import NextAuth from "next-auth"
import { options } from "./option"

export const handler = NextAuth(options)

export { handler as GET, handler as POST }