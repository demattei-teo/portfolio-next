import { Header, Hero, Portfolio, PortfolioCard } from '@/components'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
export default async function Home({ params: { language } }: { params: { language: Locale } }) {
  const Dictionary = await getDictionary(language)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio>
          <PortfolioCard srcImg='/assets/mockups/lawyer.jpg' srcLink='#' altImg='lawyer mockup' />
          <PortfolioCard srcImg='/assets/mockups/lottodo-mock2.jpg' srcLink='#' altImg='lottodo mockup' />
          <PortfolioCard srcImg='/assets/mockups/mova.jpeg' srcLink='#' altImg='mova mockup' />
          <PortfolioCard srcImg='/assets/mockups/rodaroArquitectos.jpg' srcLink='#' altImg='rodaro arquitectos mockup' />
        </Portfolio>
      </main>
    </>
  )
}
