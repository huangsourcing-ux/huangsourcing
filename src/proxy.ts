import { NextResponse, type NextRequest } from 'next/server'

const canonicalHost = 'www.huangsourcing.com'
const apexHost = 'huangsourcing.com'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase()
  const forwardedProto = request.headers.get('x-forwarded-proto')?.toLowerCase()
  const protocol = forwardedProto ?? request.nextUrl.protocol.replace(':', '')

  if (host !== apexHost && !(host === canonicalHost && protocol === 'http')) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.protocol = 'https'
  url.hostname = canonicalHost
  url.port = ''

  return NextResponse.redirect(url, 301)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
