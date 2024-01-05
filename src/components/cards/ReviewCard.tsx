import Image from 'next/image'
import { ReviewCardFooter } from '..'
import { ReviewCardFooterProps } from '../footer/ReviewCardFooter'
export interface ReviewCardProps {
  srcImage: string
  name: string
  description: string
  hrefGithub: ReviewCardFooterProps['hrefGithub']
  hrefLinkedin: ReviewCardFooterProps['hrefLinkedin']
}
function ReviewCard({ srcImage, name, description, hrefGithub, hrefLinkedin }: ReviewCardProps) {
  return (
    <article className='rounded-lg relative z-20 flex gap-2 justify-between flex-col p-3 shadow-md hover:shadow-2xl lg:transition-shadow'>
      <header className='flex gap-3 justify-start items-center'>
        <Image src={srcImage} alt={`${name} perfil image`} width={70} height={60} className='rounded-full' />
        <div className='flex flex-col gap-2 border-l px-2 border-gray-300'>
          <h5 className='font-medium'>{name}</h5>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>
      </header>
      <ReviewCardFooter hrefGithub={hrefGithub} hrefLinkedin={hrefLinkedin} />
    </article>
  )
}

export default ReviewCard
