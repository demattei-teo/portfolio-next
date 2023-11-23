import clsx from 'clsx'
import Link from 'next/link'

export interface NavbarProps {
  stateNavbar: boolean
  contentLink: {
    contentLinkHome: string
    contentLinkProyects: string
    contentLinkContact: string
  }
}

function NavBar({ stateNavbar, contentLink }: NavbarProps) {
  const classes = {
    wrapper: clsx('-z-10 flex h-0 -translate-y-1 md:self-start md:pt-[10px]  items-center overflow-hidden md:overflow-visible transition-[height,opacity,transform] duration-500 ease-in-out md:z-10 md:h-auto md:px-2', stateNavbar && 'z-10 h-32 translate-y-0 '),

    ul: clsx('flex h-full w-full justify-center items-end flex-col md:flex-row gap-4  md:gap-7'),

    links: clsx('self-center  text-center font-light text-sm transition duration-1000 ease-in-out hover:text-brown-500 md:opacity-100 hover:rotate-6', stateNavbar && 'opacity-100')
  }

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.ul}>
        <li className={classes.links}>
          <Link href='#'>{contentLink.contentLinkHome}</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>{contentLink.contentLinkProyects}</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>{contentLink.contentLinkContact}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
