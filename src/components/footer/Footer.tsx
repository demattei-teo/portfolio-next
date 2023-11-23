import Image from 'next/image'
import { InfoCard } from '..'
import { InfoCardProps } from '../cards/InfoCard'
export interface FooterProps {
  title_span?: InfoCardProps['title_span']
  description: InfoCardProps['description']
  email?: InfoCardProps['email']
}
function Footer({ title_span, description, email }: FooterProps) {
  return (
    <footer className='relative wrapper '>
      <InfoCard mode='footer' email={email} title_span={title_span} description={description} />
      <Image alt='shape' src='/assets/shapes/shape2.png' className='animate-wiggle animate-infinite animate-duration-[2000ms] hidden z-10 absolute -right-10 -top-10 xl:block ' width={156} height={156} sizes='33vw' />
    </footer>
  )
}

export default Footer
