import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import type { NextRequest } from 'next/server'
import { MiddlewareResponseInit } from 'next';
import { staticImapClient } from '@/lib/helpers';

// This function can be marked `async` if using `await` inside
interface NextApiHandlerWithUserInfo {
  request: NextRequest & MiddlewareResponseInit,
  response: NextResponse,
  user: any
}
declare module "next" {
  interface MiddlewareResponseInit {
    user: {
      [key: string]: string
    };
  }
}


export async function middleware(request: NextRequest) {
  const headersInstance = headers()
  const user = headersInstance.get('iauth')!
  console.log(user,"mdidlwerare")
  if (!user) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: "Auth Header is missing",
      result: null
    }))
  }


  return NextResponse.next();
}
 
export const config = {
  matcher: '/api/mailservice/:path*',
}