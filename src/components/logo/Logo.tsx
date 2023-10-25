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
    <div className='flex gap-2 items-center'>
      <div className='w-4 h-4 bg-blue-900 rounded-full' />
      <span className='font-extrabold text-ms tracking-wider'>{name}</span>
    </div>
  )
}

export default Logo
