import Image from 'next/image'
import { InfoCard } from '..'
import { fotoCV } from '../../../public/assets'

function Hero() {
  return (
    <section className='grid gap-5 sm:grid-cols-3 wrapper items-center'>
      <div className='relative h-80 sm:col-start-3 sm:col-end-4 sm:h-full w-full'>
        <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='object-cover rounded-2xl shadow-sm' priority fill src={fotoCV} alt='Teo Demattei' />
      </div>
      <InfoCard mode='hero' title_h1='Hola, Soy Teo Demattei' description='Soy desarrollador web frontend hace mas de dos años, tuve la oportunidade de trabajar en Nudebi y en No Country' />
    </section>
  )
}

export default Hero
