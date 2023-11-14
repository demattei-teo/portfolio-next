interface Props {
  children: React.ReactNode
}

export default function Portfolio({ children }: Props) {
  return <section className='wrapper grid grid-cols-1 md:grid-cols-2 min-h-screen gap-5'>{children}</section>
}
