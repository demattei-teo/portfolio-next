import type { Locale } from './i18n-config'

const dictionaries = {
  BR: async () => await import('./dictionary/pt-BR'),
  AR: async () => await import('./dictionary/es-AR'),
  US: async () => await import('./dictionary/en-US')
}

export const getDictionary = async (locale: Locale) => await dictionaries[locale]()
