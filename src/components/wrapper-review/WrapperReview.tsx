import { ReviewCard } from '..'
import { ReviewCardProps } from '../cards/ReviewCard'

interface WrapperReviewProps {
  reviews: ReviewCardProps[]
}
function WrapperReview({ reviews }: WrapperReviewProps) {
  return (
    <section className='wrapper gap-5 grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))]'>
      <ReviewCard name={reviews[0].name} hrefGithub={reviews[0].hrefGithub} hrefLinkedin={reviews[0].hrefLinkedin} description={reviews[0].description} srcImage='/assets/reviews-images/david.png' />
      <ReviewCard name={reviews[1].name} hrefGithub={reviews[1].hrefGithub} hrefLinkedin={reviews[1].hrefLinkedin} description={reviews[1].description} srcImage='/assets/reviews-images/nahuel.png' />
      <ReviewCard name={reviews[2].name} hrefGithub={reviews[2].hrefGithub} hrefLinkedin={reviews[2].hrefLinkedin} description={reviews[2].description} srcImage='/assets/reviews-images/dylan.jpeg' />
    </section>
  )
}

export default WrapperReview
