import { NextResponse,NextRequest } from "next/server";

export function proxy(request: NextRequest, url: string) {
    const {pathname} = request.nextUrl;
    const response = NextResponse.next()

    if(pathname === "/"){
        const newUrl = "/home"
        return NextResponse.redirect(new URL(newUrl, request.url))
    }
    return response
}

export const config = {
    matcher:"/((?!api|_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|favicon.ico).*)"
}