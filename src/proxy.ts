import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export async function proxy(req: NextRequest) {
    const token = await getToken({ req })
    const pathName = req.nextUrl.pathname
    const isAuth: boolean = pathName === '/login' || pathName === '/register'

    if (isAuth) {
        if (token) {
            return NextResponse.redirect(new URL("/", req.url))
        }
        return NextResponse.next()
    }

    if (token) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/login", req.url))
}

export const config = {
    matcher: ['/brands', '/cart', '/cart/checkout', '/categories', '/shop', '/wishlist', '/login', '/register']
}