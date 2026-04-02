import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {

    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async function (userDataLogin) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API}api/v1/auth/signin`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userDataLogin),
                })

                const data = await response.json()

                if (response.ok) {
                    const decodeToken: { id: string } = jwtDecode(data.token)

                    return {
                        id: decodeToken.id,
                        name: data.user.name,
                        email: data.user.email,
                        tokenUser: data.token,
                    }
                }

                return null
            },
        }),
    ],
    callbacks: {
        jwt: function ({ user, token }) {

            if (user) {
                token.tokenUser = user.tokenUser;
            }
            return token
        },

        session: function ({ session, token }) {
            if (token.tokenUser) {
                session.user.tokenUser = token.tokenUser;
            }
            if (token.sub) {
                session.user.id = token.sub
            }
            return session;

        },
    },
    pages: {
        signIn: "/login"
    }

}