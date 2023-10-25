import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  stateNavbar: boolean
}

function NavBar({ stateNavbar }: Props) {
  const classes = {
    wrapper: clsx('-z-10 flex h-0 -translate-y-1 items-center self-center overflow-hidden transition-[height,opacity,transform] duration-500 ease-in-out md:z-10 md:h-auto md:items-center md:justify-center md:px-2', stateNavbar && 'z-10 h-32 translate-y-0 '),

    ul: clsx('flex flex-col md:flex-row items-center gap-4 self-end overflow-hidden md:gap-7'),

    links: clsx('self-center text-center font-medium text-ms transition duration-1000 ease-in-out hover:text-brown-500 md:opacity-100 hover:rotate-6', stateNavbar && 'opacity-100')
  }

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.ul}>
        <li className={classes.links}>
          <Link href='#'>Home</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>Proyects</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
