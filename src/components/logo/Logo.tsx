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
    <div className='flex gap-2 self-start col-start-1 col-end-3 items-center'>
      <div className='w-4 h-4 bg-blue-500 rounded-full' />
      <span className='font-extrabold text-lg  tracking-wider'>{name}</span>
    </div>
  )
}

export default Logo
