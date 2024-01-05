'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { IconCV, IconGitHub, IconInstagram, IconLink, IconLinkedin } from '..'

export interface InfoCardProps {
  mode: 'hero' | 'footer' | 'proyect'
  title_h1?: string
  title_span?: string
  description: string
  email?: string
  tecnologies?: string
  githubUrlProyect?: string
  LinkProyect?: string
  contentButton?: string
  linkCV?: string
}

function InfoCard({ title_h1, title_span, description, mode, email, tecnologies, githubUrlProyect, LinkProyect, contentButton, linkCV }: InfoCardProps) {
  const styles = {
    wrapper: clsx('h-full p-4 sm:p-9 grid gap-8 md:gap-12 animate-fade-right opacity-0 relative shadow-md bg-blue-50 overflow-hidden rounded-2xl', mode === 'hero' && ' sm:col-start-1 sm:col-end-3 sm:row-start-1 ', mode === 'footer' && 'col-span-full')
  }
  switch (mode) {
    case 'footer':
    case 'hero':
      return (
        <article className={styles.wrapper}>
          <div className='absolute bg-green-50 blur-[80px] -top-24 w-80 h-80 -right-24 ' />
          {title_h1 && <h1 className='z-10 text-xl'>{title_h1}</h1>}
          {title_span && <span className='z-10 text-xl'>{title_span}</span>}
          <div className='z-10 flex flex-col gap-3'>
            <p className='font-light text-ms'>{description}</p>
            {email && <p className='text-ms'>{email}</p>}
          </div>
          <div className='flex flex-col md:flex-row gap-4 z-10'>
            <Link className='px-9 py-3 bg-black self-start md:self-center text-gray-300 text-sm font-semibold justify-self-start rounded-3xl hover:text-white transition-colors duration-500' href='mailto:dematteiteo@gmail.com'>
              {contentButton}
            </Link>
            <ul className='flex self-start md:self-center justify-self-start gap-3'>
              <li className='relative bg-transparent group self-center'>
                <div className='absolute bg-gray-50 shadow-md w-full h-full rounded-full transition-opacity duration-500 -z-10 group-hover:opacity-0' />
                <div className='absolute w-full h-full bg-gradient-to-tr transition-opacity duration-500 group-hover:opacity-100 rounded-full from-yellow-400 via-pink-500 to-fuchsia-600 opacity-0 -z-10' />
                <Link href='https://www.instagram.com/_demaatteo/' className='z-20 flex p-3 duration-500 rounded-full group'>
                  <IconInstagram />
                </Link>
              </li>
              <li className='relative bg-transparent group self-center'>
                <div className='absolute bg-gray-50 shadow-md w-full h-full rounded-full transition-opacity duration-500 -z-10 group-hover:opacity-0' />
                <div className='absolute w-full h-full bg-gradient-to-tr transition-opacity duration-500 group-hover:opacity-100 rounded-full  from-gray-700 via-gray-600 to-gray-900 opacity-0 -z-10' />
                <Link href='https://github.com/demattei-teo' className='z-20 flex p-3 duration-500 rounded-full group'>
                  <IconGitHub />
                </Link>
              </li>
              <li className='relative bg-transparent group self-center'>
                <div className='absolute bg-gray-50 shadow-md w-full h-full rounded-full transition-opacity duration-500 -z-10 group-hover:opacity-0' />
                <div className='absolute w-full h-full bg-gradient-to-tr transition-opacity duration-500 group-hover:opacity-100 rounded-full   from-blue-700 via-blue-800 to-blue-900 opacity-0 -z-10' />
                <Link href='https://www.linkedin.com/in/teodemattei' className='z-20 flex p-3 duration-500 rounded-full group'>
                  <IconLinkedin />
                </Link>
              </li>
              <li className='relative bg-transparent group self-center'>
                <div className='absolute bg-gray-50 shadow-md w-full h-full rounded-full transition-opacity duration-500 -z-10 group-hover:opacity-0' />
                <div className='absolute w-full h-full bg-gradient-to-tr transition-opacity duration-500 group-hover:opacity-100 rounded-full from-blue-700 via-blue-800 to-blue-900 opacity-0 -z-10' />
                {linkCV && (
                  <Link href={linkCV} className='z-20 flex p-3 duration-500 rounded-full group'>
                    <IconCV />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </article>
      )

    case 'proyect':
      return (
        <article className={styles.wrapper}>
          <div className='absolute bg-green-50 blur-[80px] -top-24 w-80 h-80 -right-24 ' />
          {title_h1 && <h1 className='z-10 text-xl'>{title_h1}</h1>}
          {title_span && <span className='z-10 text-xl'>{title_span}</span>}
          <div className='z-10 flex flex-col gap-3'>
            <p className='font-light text-ms'>{description}</p>
            {tecnologies && <p className='font-light text-ms'>{tecnologies}</p>}
          </div>
          <ul className='flex self-start md:self-center justify-self-start gap-3 z-20'>
            <li className='relative bg-transparent group self-center'>
              <div className='absolute bg-gray-50 shadow-md w-full h-full rounded-full transition-opacity duration-500 -z-10 group-hover:opacity-0' />
              <div className='absolute w-full h-full bg-gradient-to-tr transition-opacity duration-500 group-hover:opacity-100 rounded-full  from-gray-700 via-gray-600 to-gray-900 opacity-0 -z-10' />
              {githubUrlProyect && (
                <Link href={githubUrlProyect} className='z-20 flex p-3 duration-500 rounded-full group'>
                  <IconGitHub />
                </Link>
              )}
            </li>
            <li className='relative bg-transparent group self-center'>
              <div className='absolute bg-gray-50 shadow-md w-full h-full rounded-full transition-opacity duration-500 -z-10 group-hover:opacity-0' />
              <div className='absolute w-full h-full bg-gradient-to-tr transition-opacity duration-500 group-hover:opacity-100 rounded-full  from-blue-700 via-blue-800 to-blue-900 opacity-0 -z-10' />
              {LinkProyect && (
                <Link href={LinkProyect} className='z-20 flex p-3 duration-500 rounded-full group'>
                  <IconLink color='black' />
                </Link>
              )}
            </li>
          </ul>
        </article>
      )
  }
}
export default InfoCard
