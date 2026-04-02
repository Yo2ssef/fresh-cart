import { nextAuthOptions } from "@/lib/configs/next-auth-config"
import NextAuth from "next-auth"

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
