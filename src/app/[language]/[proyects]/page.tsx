import { Footer } from '@/components'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Image from 'next/image'
import Link from 'next/link'
import { IconBack, WrapperInfoProyect } from './components'

async function Proyect({ params }: { params: { language: Locale; proyects: string } }) {
  const { proyects } = params
  const dictionary = await getDictionary(params.language)
  return (
    <>
      <header className='grid wrapper'>
        <Link className='justify-self-start relative group' href={`/${params.language}`}>
          <IconBack />
        </Link>
      </header>
      <main className='grid min-[800px]:grid-cols-2 gap-4 wrapper'>
        {proyects === 'lawyer' && <WrapperInfoProyect linkProyect={dictionary.default.proyects.lawyer.proyectCard.LinkProyect} githubUrlProyect={dictionary.default.proyects.lawyer.proyectCard.githubUrlProyect} srcImg={dictionary.default.proyects.lawyer.srcImg} title_h1={dictionary.default.proyects.lawyer.proyectCard.title_h1} description={dictionary.default.proyects.lawyer.proyectCard.description} tecnologies={dictionary.default.proyects.lawyer.proyectCard.tecnologies} />}
        {proyects === 'mova' && <WrapperInfoProyect githubUrlProyect={dictionary.default.proyects.mova.proyectCard.githubUrlProyect} srcImg={dictionary.default.proyects.mova.srcImg} title_h1={dictionary.default.proyects.mova.proyectCard.title_h1} description={dictionary.default.proyects.mova.proyectCard.description} tecnologies={dictionary.default.proyects.mova.proyectCard.tecnologies} />}
        {proyects === 'lotTodo' && <WrapperInfoProyect linkProyect={dictionary.default.proyects.lotTodo.proyectCard.LinkProyect} githubUrlProyect={dictionary.default.proyects.lotTodo.proyectCard.githubUrlProyect} srcImg={dictionary.default.proyects.lotTodo.srcImg} title_h1={dictionary.default.proyects.lotTodo.proyectCard.title_h1} description={dictionary.default.proyects.lotTodo.proyectCard.description} tecnologies={dictionary.default.proyects.lotTodo.proyectCard.tecnologies} />}
        {proyects === 'rodaroArchitects' && <WrapperInfoProyect linkProyect={dictionary.default.proyects.rodaroArchitects.proyectCard.LinkProyect} githubUrlProyect={dictionary.default.proyects.rodaroArchitects.proyectCard.githubUrlProyect} srcImg={dictionary.default.proyects.rodaroArchitects.srcImg} title_h1={dictionary.default.proyects.rodaroArchitects.proyectCard.title_h1} description={dictionary.default.proyects.rodaroArchitects.proyectCard.description} tecnologies={dictionary.default.proyects.rodaroArchitects.proyectCard.tecnologies} />}
        {proyects !== 'lawyer' && proyects !== 'rodaroArchitects' && proyects !== 'mova' && proyects !== 'lotTodo' ? (
          <div className='relative justify-self-center w-full md:w-[600px] col-span-full h-[min(90vw,_650px)] '>
            <Image fill alt='404 image' sizes='80vw' src='/assets/404.png' />
          </div>
        ) : (
          ''
        )}
      </main>
      <Footer description={dictionary.default.home.footer.description} title_span={dictionary.default.home.footer.title_span} email={dictionary.default.home.footer.email} />
    </>
  )
}
export default Proyect
