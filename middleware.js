import { NextResponse } from 'next/server'
 
// Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: '/api/:function*',
// }
 
export function middleware(request) {
  // - logger middleware
  // console.log(request.nextUrl.pathname)
  
  return NextResponse.next()
  
}
