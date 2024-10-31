'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { IconClose, IconMenu, Logo, NavBar, SelectLanguage } from '..'
import { LogoProps } from '../logo/Logo'
import { NavbarProps } from './NavBar'

export interface HeaderProps {
  logo: LogoProps['name']
  contentLinks: NavbarProps['contentLink']
}

function Header({ contentLinks }: HeaderProps) {
  const [stateMenu, setStateMenu] = useState(false)

  function changeValue() {
    setStateMenu(!stateMenu)
  }

  const classes = {
    header: clsx('wrapper flex overflow-hidden justify-between flex-col px-4 py-4 md:flex-row [svg]'),
    contResponsive: clsx('w-full flex justify-between items-center')
  }

  return (
    <header className={classes.header}>
      <div className={classes.contResponsive}>
        <Logo name='TDO' />
        <div className='flex gap-2'>
          <SelectLanguage />
          <div onClick={changeValue} className='grid [grid-template-areas:"icons"] md:hidden'>
            <IconMenu stateNavbar={stateMenu} />
            <IconClose stateNavbar={stateMenu} />
          </div>
        </div>
      </div>
      <NavBar stateNavbar={stateMenu} contentLink={contentLinks} />
    </header>
  )
}

export default Header
