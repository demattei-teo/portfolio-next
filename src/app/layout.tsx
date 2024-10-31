import { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './[language]/globals.css'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'I am a frontend web developer with demonstrable experience of 1 year working at No Country and Nubedi, where I make modern, responsive, functional and attractive interfaces.',
  generator: 'Next.js',
  applicationName: 'Teo Demattei,  Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'web development',
    'frontend',
    'programmer',
    'html',
    'css',
    'javascript',
    'react',
    'next.js',
    'web layout designer',
    'web developer',
    'frontend web developer',
    'frontend developer',
    'website builder'
  ],
  authors: [{ name: 'Teo', url: 'https://www.linkedin.com/in/teodemattei/' }],
  creator: 'Teo Demattei',
  publisher: 'Teo Demattei',
  category: 'desarrollo',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    title: 'Portfolio',
    description:
      'I am a frontend web developer with demonstrable experience of 1 year working at No Country and Nubedi, where I make modern, responsive, functional and attractive interfaces.',
    url: 'https://lawyerdev.vercel.app',
    siteName: 'Portfolio',
    locale: 'en',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
