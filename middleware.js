import { NextResponse } from 'next/server'
 
// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/:function*',
}
 
export function middleware(request) {
//   // console.log('Expression 3')
//   // console.log(NextResponse)
//   // // NextResponse.next()
//   // console.log('Expression 4')
//   return 
  
}
