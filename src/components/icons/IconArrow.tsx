import clsx from 'clsx'

interface Props {
  state: boolean
}

function IconArrow({ state }: Props) {
  return (
    <svg width='11' height='17' className={clsx('cursor-pointer transition ease-linear duration-300', state ? 'rotate-90' : 'rotate-0')} viewBox='0 0 11 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.6113 9.6145L3.9707 16.2551C3.51172 16.7141 2.76953 16.7141 2.31543 16.2551L1.21191 15.1516C0.75293 14.6926 0.75293 13.9504 1.21191 13.4963L5.91895 8.78931L1.21191 4.08228C0.75293 3.62329 0.75293 2.8811 1.21191 2.427L2.31055 1.31372C2.76953 0.854736 3.51172 0.854736 3.96582 1.31372L10.6064 7.95435C11.0703 8.41333 11.0703 9.15552 10.6113 9.6145Z' fill='black' />
    </svg>
  )
}
export default IconArrow
