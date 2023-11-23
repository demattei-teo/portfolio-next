'use client'
import { i18n } from '@/i18n-config'
import clsx from 'clsx'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { IconArrow } from '..'
import { flagAR, flagBR, flagUS } from '../../../public/assets'

export default function SelectLanguage() {
  const router = useRouter()
  const pathName = usePathname()
  const locale = pathName.split('/')[1]
  function redirectedPathName(newLocale: string) {
    const newPath = pathName.replace(`/${locale}`, `/${newLocale}`)
    return router.push(newPath)
  }
  const [stateLanguage, setStateLanguage] = useState(false)

  function handleStateLanguage() {
    setStateLanguage(!stateLanguage)
  }

  const style = {
    wrapper: clsx('grid gap-x-2 md:gap-2'),
    wrapperArrow: clsx('grid grid-cols-2 items-center justify-items-center relative justify-self-center'),
    wrapperFlags: clsx('pt-[6px] md:pt-0 -translate-y-1 flex flex-col transition-[height,opacity,transform] ease-linear duration-300 gap-2 h-[0px] self-end justify-self-end z-20', stateLanguage && '!h-24 translate-y-0')
  }
  const icons = [
    {
      content: <Image key={1} fill alt='united state flag' src={flagUS} sizes='10vw' />,
      value: i18n.locales[2]
    },
    {
      content: <Image key={2} fill alt='brasil flag' src={flagBR} sizes='33vw' priority />,
      value: i18n.locales[0]
    },
    {
      content: <Image key={3} fill alt='argentina flag' src={flagAR} sizes='33vw' />,
      value: i18n.locales[1]
    }
  ]

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperArrow} onClick={handleStateLanguage}>
        <IconArrow state={stateLanguage} />
        <div className='relative  w-12 h-7'>{icons.map(({ value, content }) => value === locale && content)}</div>
      </div>
      <ul className={style.wrapperFlags}>
        {icons.map((data, index) => (
          <li className='cursor-pointer relative w-12 h-7' key={index} onClick={() => redirectedPathName(data.value)}>
            {data.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
