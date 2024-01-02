import { Footer } from '@/components'
import EN_US from '@/dictionary/en-US'
import Image from 'next/image'
import Link from 'next/link'
import { IconBack } from './[language]/[proyects]/components'
async function NotFound() {
  return (
    <>
      <header className='grid wrapper'>
        <Link className='justify-self-start relative group' href={`/`}>
          <IconBack />
        </Link>
      </header>
      <main>
        <section className='relative mx-auto my-0 max-w-lg h-[min(88vw,_400px)]'>
          <Image src='/assets/404.png' alt='404 error image' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw' />
        </section>
      </main>
      <Footer description={EN_US.home.footer.description} title_span={EN_US.home.footer.title_span} email={EN_US.home.footer.email} contentButton={EN_US.home.footer.contentButton} linkCV={EN_US.home.footer.linkCV} />
    </>
  )
}

export default NotFound
