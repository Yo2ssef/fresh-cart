import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUseToken() {
    const cookie = await cookies()

    const sessionToken = cookie.get('next-auth.session-token')?.value

    const token = await decode({ token: sessionToken, secret: process.env.NEXTAUTH_SECRET || "" })

    return token?.tokenUser

}