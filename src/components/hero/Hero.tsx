import Image from 'next/image'
import { InfoCard } from '..'
import { fotoCV } from '../../../public/assets'
import { InfoCardProps } from '../cards/InfoCard'

export interface HeroProps {
  title_h1?: InfoCardProps['tecnologies']
  title_span?: InfoCardProps['title_span']
  description: InfoCardProps['description']
  email?: InfoCardProps['email']
  tecnologies?: InfoCardProps['tecnologies']
  githubUrlProyect?: InfoCardProps['githubUrlProyect']
  linkProyect?: InfoCardProps['LinkProyect']
  contentButton: InfoCardProps['contentButton']
  linkCV: InfoCardProps['linkCV']
}
function Hero({ title_h1, title_span, contentButton, description, email, tecnologies, githubUrlProyect, linkProyect, linkCV }: HeroProps) {
  return (
    <section className='grid relative gap-5 sm:grid-cols-3 wrapper items-center'>
      <div className='relative h-80 sm:col-start-3 sm:col-end-4 sm:h-full w-full'>
        <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='object-cover rounded-2xl shadow-sm' priority fill src={fotoCV} alt='Teo Demattei' />
      </div>
      <InfoCard mode='hero' linkCV={linkCV} contentButton={contentButton} title_h1={title_h1} description={description} />
      <Image alt='shape' src='/assets/shapes/shape3.png' className='rotate-45 animate-wiggle animate-infinite animate-duration-[2000ms] hidden absolute -right-10 bottom-0 -z-20 xl:block ' width={156} height={156} sizes='33vw' />
    </section>
  )
}

export default Hero
