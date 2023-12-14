import NotFound from '@/app/not-found'
import { Footer } from '@/components'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import { IconBack, WrapperInfoProyect } from './components'

type ProjectConfigurations = {
  [key: string]: {
    srcImg: string
    title_h1: string | undefined
    description: string
    tecnologies: string | undefined
    linkProyect: string | undefined
    githubUrlProyect: string | undefined
  }
}

async function Proyect({ params }: { params: { language: Locale; proyects: string } }) {
  const validProyect = ['lawyer', 'mova', 'lotTodo', 'rodaroArchitects']
  const { proyects } = params
  const dictionary = await getDictionary(params.language)
  const projectConfigurations: ProjectConfigurations = {
    lawyer: {
      srcImg: dictionary.default.proyects.lawyer.srcImg,
      title_h1: dictionary.default.proyects.lawyer.proyectCard.title_h1,
      description: dictionary.default.proyects.lawyer.proyectCard.description,
      tecnologies: dictionary.default.proyects.lawyer.proyectCard.tecnologies,
      linkProyect: dictionary.default.proyects.lawyer.proyectCard.LinkProyect,
      githubUrlProyect: dictionary.default.proyects.lawyer.proyectCard.githubUrlProyect
    },
    mova: {
      srcImg: dictionary.default.proyects.mova.srcImg,
      title_h1: dictionary.default.proyects.mova.proyectCard.title_h1,
      description: dictionary.default.proyects.mova.proyectCard.description,
      tecnologies: dictionary.default.proyects.mova.proyectCard.tecnologies,
      githubUrlProyect: dictionary.default.proyects.mova.proyectCard.githubUrlProyect,
      linkProyect: dictionary.default.proyects.mova.proyectCard.LinkProyect
    },
    lotTodo: {
      srcImg: dictionary.default.proyects.lotTodo.srcImg,
      title_h1: dictionary.default.proyects.lotTodo.proyectCard.title_h1,
      description: dictionary.default.proyects.lotTodo.proyectCard.description,
      tecnologies: dictionary.default.proyects.lotTodo.proyectCard.tecnologies,
      linkProyect: dictionary.default.proyects.lotTodo.proyectCard.LinkProyect,
      githubUrlProyect: dictionary.default.proyects.lotTodo.proyectCard.githubUrlProyect
    },
    rodaroArchitects: {
      srcImg: dictionary.default.proyects.rodaroArchitects.srcImg,
      title_h1: dictionary.default.proyects.rodaroArchitects.proyectCard.title_h1,
      description: dictionary.default.proyects.rodaroArchitects.proyectCard.description,
      tecnologies: dictionary.default.proyects.rodaroArchitects.proyectCard.tecnologies,
      linkProyect: dictionary.default.proyects.rodaroArchitects.proyectCard.LinkProyect,
      githubUrlProyect: dictionary.default.proyects.rodaroArchitects.proyectCard.githubUrlProyect
    }
  }

  const projectConfig = projectConfigurations[proyects]
  if (!validProyect.includes(params.proyects)) {
    return <NotFound />
  } else {
    return (
      <>
        <header className='grid wrapper'>
          <Link className='justify-self-start relative group' href={`/${params.language}`}>
            <IconBack />
          </Link>
        </header>
        <main className='grid min-[800px]:grid-cols-2 gap-4 wrapper'>{projectConfig && <WrapperInfoProyect srcImg={projectConfig.srcImg} title_h1={projectConfig.title_h1} description={projectConfig.description} tecnologies={projectConfig.tecnologies} linkProyect={projectConfig.linkProyect} githubUrlProyect={projectConfig.githubUrlProyect} />}</main>
        <Footer description={dictionary.default.home.footer.description} title_span={dictionary.default.home.footer.title_span} email={dictionary.default.home.footer.email} contentButton={dictionary.default.proyects.footer.contentButton} linkCV={dictionary.default.proyects.footer.linkCV} />
      </>
    )
  }
}
export default Proyect
