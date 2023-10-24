import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

console.log('hola')
function getLocale(request: NextRequest) {
  const browserLanguage = request.headers.get('accept-language') ?? ''
  const headers = { 'accept-language': browserLanguage }
  const languages = new Negotiator({ headers }).languages()
  const locale = match(languages, i18n.locales, i18n.defaultLocale)
  console.log(languages)
  console.log(locale)
  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = i18n.locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  const pathnameHasAssets = pathname.includes('/assets/')

  if (pathnameHasLocale || pathnameHasAssets) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
