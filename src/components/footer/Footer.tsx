import Image from 'next/image'
import { InfoCard } from '..'

function Footer() {
  return (
    <footer className='relative wrapper '>
      <InfoCard mode='footer' email='dematteiteo@gmail.com' title_span='Want to work together?' description='Feel free to reach out for collaborations or just a friendly hello' />
      <Image alt='shape' src='/assets/shapes/shape2.png' className='animate-wiggle animate-infinite animate-duration-[2000ms] hidden z-10 absolute -right-10 -top-10 xl:block ' width={156} height={156} sizes='33vw' />
    </footer>
  )
}

export default Footer
