import Image from 'next/image'

interface Props {
  children: React.ReactNode
}

export default function Portfolio({ children }: Props) {
  return (
    <section id='proyect' className='wrapper relative grid grid-cols-1 md:grid-cols-2 min-h-screen gap-5'>
      <Image width={150} height={150} src='/assets/shapes/shape4.png' className='absolute bottom-[40%] -left-16 animate-spin animate-infinite animate-duration-[80s] hidden xl:block animate-ease-linear' alt='shape' sizes='33vw' />
      {children}
    </section>
  )
}
