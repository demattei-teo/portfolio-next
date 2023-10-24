import type { Locale } from './i18n-config'

const dictionaries = {
  pt: async () => await import('./dictionary/pt-BR.json').then((module) => module.default),
  es: async () => await import('./dictionary/es-AR.json').then((module) => module.default),
  en: async () => await import('./dictionary/en-US.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => await dictionaries[locale]()
