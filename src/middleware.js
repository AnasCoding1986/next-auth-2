import { NextResponse } from 'next/server'

const user = true;
 
export function middleware(request) {

  const cookie = request.cookies.get('nextjs')

  if (!cookie) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  return NextResponse.next()
}

export const config = {
  matcher: ['/about', '/dash'],
}