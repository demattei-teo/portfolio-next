import { InfoCard } from '@/components'
import { InfoCardProps } from '@/components/cards/InfoCard'
import Image from 'next/image'

interface WrapperInfoProyectProps {
  srcImg: string
  title_h1: InfoCardProps['title_h1']
  description: InfoCardProps['description']
  tecnologies: InfoCardProps['tecnologies']
  linkProyect?: InfoCardProps['LinkProyect']
  githubUrlProyect?: InfoCardProps['githubUrlProyect']
}

export default function WrapperInfoProyect({ srcImg, title_h1, githubUrlProyect, description, linkProyect, tecnologies }: WrapperInfoProyectProps) {
  return (
    <>
      <div className='relative h-80 lg:h-full w-full shadow-md rounded-2xl'>
        <Image src={srcImg} priority fill alt='lawyer mockup' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='object-cover rounded-2xl' />
      </div>
      <InfoCard mode='proyect' title_h1={title_h1} description={description} tecnologies={tecnologies} LinkProyect={linkProyect} githubUrlProyect={githubUrlProyect} />
    </>
  )
}
