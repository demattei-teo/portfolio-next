import { Footer, Header, Hero, Portfolio, PortfolioCard } from '@/components'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function Home({ params: { language } }: { params: { language: Locale } }) {
  const dictionary = await getDictionary(language)

  return (
    <>
      <Header contentLinks={dictionary.default.home.header.contentLinks} logo={dictionary.default.home.header.logo} />
      <main>
        <Hero description={dictionary.default.home.hero.description} title_h1={dictionary.default.home.hero.title_h1} linkCV={dictionary.default.home.hero.linkCV} contentButton={dictionary.default.home.hero.contentButton} />
        <Portfolio>
          <PortfolioCard srcImg='/assets/mockups/lawyer.jpg' srcLink={`/${language}/lawyer`} altImg='lawyer mockup' />
          <PortfolioCard srcImg='/assets/mockups/lottodo-mock2.jpg' srcLink={`/${language}/lotTodo`} altImg='lottodo mockup' />
          <PortfolioCard srcImg='/assets/mockups/mova.jpeg' srcLink={`/${language}/mova`} altImg='mova mockup' />
          <PortfolioCard srcImg='/assets/mockups/rodaroArquitectos.jpg' srcLink={`/${language}/rodaroArchitects`} altImg='rodaro arquitectos mockup' />
          <PortfolioCard srcImg='/assets/mockups/NFTHUB_1.jpg' srcLink={`/${language}/nfthub`} altImg='NFTHUB mockup' />
          <PortfolioCard srcImg='/assets/mockups/teachIT.png' srcLink={`/${language}/teachit`} altImg='teachit mockup' />
        </Portfolio>
      </main>
      <Footer description={dictionary.default.home.footer.description} title_span={dictionary.default.home.footer.title_span} email={dictionary.default.home.footer.email} contentButton={dictionary.default.home.footer.contentButton} linkCV={dictionary.default.home.footer.linkCV} />
    </>
  )
}
