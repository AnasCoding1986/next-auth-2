import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

const user = true;
 
export function middleware(request) {

  // const cookie = request.cookies.get('nextjs');

  const token = cookies(request).get("next-auth.session-token");

  if (!token) {
    return NextResponse.rewrite(new URL('/api/auth/signin', request.url))
  }
 
  return NextResponse.next()
}

export const config = {
  matcher: ['/service', '/dash'],
}