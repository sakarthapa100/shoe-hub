import React from 'react'
import { reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
<h3 className=' flex justify-center items-centerfont-palanquin text-4xl font-bold'> What Our 
  <span className='text-coral-red'> Customers  </span>
   Say? </h3>
   <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine feedback from our customers who have sirues fin iyr atusfued cystiners abiyt their exceptional experiences with us .</p>
   <div className='mt-24 flex flex-1 justify-center items-center max-lg:flex-col gap-14'>
    {
      reviews.map((review)=> (
        <ReviewCard
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
        />
      ))
    }
   </div>
    </section>
  )
}

export default CustomerReviews