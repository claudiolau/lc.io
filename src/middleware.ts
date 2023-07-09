import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const response = NextResponse.next()

    if (request.nextUrl.pathname.startsWith('/api')) {
        response.headers.append('Access-Control-Allow-Origin', '*')
    }
    //...
    return response
}
