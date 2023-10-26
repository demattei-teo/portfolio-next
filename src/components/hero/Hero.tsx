import { fotoCV } from '@/assets'
import Image from 'next/image'
import { InfoCard } from '..'

function Hero() {
  return (
    <section className='grid gap-5 sm:grid-cols-3 p-4 wrapper items-center'>
      <div className='relative h-80 sm:col-start-3 sm:col-end-4 sm:h-full w-full'>
        <Image className='object-cover rounded-lg shadow-sm' fill src={fotoCV} alt='Teo Demattei' />
      </div>
      <InfoCard title_h1='Hola, Soy Teo Demattei' description='Soy desarrollador web frontend hace mas de dos años, tuve la oportunidade de trabajar en Nudebi y en No Country' />
    </section>
  )
}

export default Hero
