import Image from 'next/image'
import Link from 'next/link'
import { IconLink } from '..'

interface Props {
  srcImg: string
  altImg: string
  srcLink: string
}

export default function PortfolioCard({ srcImg, altImg, srcLink }: Props) {
  return (
    <Link href={srcLink} className='shadow-md z-20 rounded-2xl relative min-h-[350px] group'>
      <div
        className='absolute right-5 bottom-5 transition lg:opacity-0
       rounded-full shadow-sm lg:group-hover:opacity-100 z-20'
      >
        <IconLink color='white' />
      </div>
      <div className='absolute w-full h-full transition-opacity ease-linear duration-300 bg-black lg:opacity-0 lg:group-hover:opacity-40 rounded-2xl opacity-40' />
      <Image fill src={srcImg} alt={altImg} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' className='rounded-2xl -z-10 object-cover' />
    </Link>
  )
}
