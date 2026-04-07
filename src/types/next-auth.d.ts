import  { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      tokenUser?: string;
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    name: string;
    email: string;
    tokenUser?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    tokenUser?: string;
  }
}