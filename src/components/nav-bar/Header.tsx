'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { IconClose, IconMenu, Logo, NavBar } from '..'
import { flagAR, flagBR, flagUS } from '../../../public/assets'
import BlurDataUrlUtils from '../../utils/blurDataUrlUtils'

const icons = [
  {
    key: 0,
    content: <Image fill alt='brasil flag' src={flagBR} sizes='4vw' priority blurDataURL={BlurDataUrlUtils} />,

    value: 'pt-BR'
  },
  {
    key: 1,
    content: <Image fill alt='united state flag' src={flagUS} sizes='4vw' blurDataURL={BlurDataUrlUtils} />,
    value: 'en-US'
  },
  {
    key: 2,
    content: <Image fill alt='argentina flag' src={flagAR} sizes='4vw' blurDataURL={BlurDataUrlUtils} />,
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
    header: clsx('wrapper flex flex-col  px-4 py-4 md:flex-row'),
    contResponsive: clsx('col-span-full grid flex-grow items-center [grid-template-areas:"logo_icons"]'),
    logo: clsx('[grid-area:logo] flex gap-2 items-center'),
    contIcons: clsx('grid cursor-pointer self-center justify-self-end overflow-hidden  [grid-template-areas:"icons"] md:hidden')
  }

  return (
    <header className={classes.header}>
      <div className={classes.contResponsive}>
        <Logo name='TDO' />
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
