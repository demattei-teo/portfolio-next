'use client'

import { FlagAR, FlagBR, FlagUS } from '@/assets'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { IconClose, IconMenu, NavBar } from '..'
import BlurDataUrlUtils from '../../utils/blurDataUrlUtils'

const icons = [
  {
    key: 0,
    content: <Image fill alt='brasil flag' src={FlagBR} sizes='4vw' priority blurDataURL={BlurDataUrlUtils} />,

    value: 'pt-BR'
  },
  {
    key: 1,
    content: <Image fill alt='united state flag' src={FlagUS} sizes='4vw' blurDataURL={BlurDataUrlUtils} />,
    value: 'en-US'
  },
  {
    key: 2,
    content: <Image fill alt='argentina flag' src={FlagAR} sizes='4vw' blurDataURL={BlurDataUrlUtils} />,
    value: 'es-ES'
  }
]

function Header() {
  const [stateMenu, setStateMenu] = useState(false)
  const [stateLanguage, setStateLanguage] = useState(0)
  function changeValue() {
    setStateMenu(!stateMenu)
  }
  const classes = {
    header: clsx('flex flex-col  px-4 py-4 md:flex-row'),
    contResponsive: clsx('col-span-full grid flex-grow items-center [grid-template-areas:"logo_icons"]'),
    logo: clsx('[grid-area:logo] flex gap-2 items-center'),
    contIcons: clsx('grid cursor-pointer self-center justify-self-end overflow-hidden  [grid-template-areas:"icons"] md:hidden')
  }

  return (
    <header className={classes.header}>
      <div className={classes.contResponsive}>
        <div className={classes.logo}>
          <div className='rounded-full bg-blue-900 w-4 h-4' />
          <span className='font-extrabold tracking-wider-'>TDO</span>
        </div>
        <div onClick={changeValue} className={classes.contIcons}>
          <IconMenu stateNavbar={stateMenu} />
          <IconClose stateNavbar={stateMenu} />
        </div>
      </div>
      <NavBar stateNavbar={stateMenu} />
    </header>
  )
}

export default Header
