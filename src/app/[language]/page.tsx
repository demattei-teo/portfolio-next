import { Header } from '@/components'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
export default async function Home({ params: { language } }: { params: { language: Locale } }) {
  const Dictionary = await getDictionary(language)

  return (
    <>
      <Header />
      <main></main>
    </>
  )
}
