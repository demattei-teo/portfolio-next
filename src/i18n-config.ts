export const i18n = {
  defaultLocale: 'es',
  locales: ['pt', 'en', 'es']
} as const

export type Locale = (typeof i18n)['locales'][number]
