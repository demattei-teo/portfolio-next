import { Ingrid_Darling } from 'next/font/google'
const ingrid_darling = Ingrid_Darling({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

interface Props {
  name: string
}

const Logo = ({ name }: Props) => {
  return (
    <div>
      <span />
      {name}
    </div>
  )
}

export default Logo
