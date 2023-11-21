export const i18n = {
  defaultLocale: 'AR',
  locales: ['BR', 'AR', 'US']
} as const

export type Locale = (typeof i18n)['locales'][number]
