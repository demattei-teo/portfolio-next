import Link from 'next/link'
import { IconReviewGithub, IconReviewLinkedin } from '..'

export interface ReviewCardFooterProps {
  hrefGithub: string
  hrefLinkedin: string
}

function ReviewCardFooter({ hrefGithub, hrefLinkedin }: ReviewCardFooterProps) {
  return (
    <footer className='flex gap-2 w-full items-center justify-end'>
      <Link href={hrefGithub}>
        <IconReviewGithub />
      </Link>
      <Link href={hrefLinkedin}>
        <IconReviewLinkedin />
      </Link>
    </footer>
  )
}

export default ReviewCardFooter
