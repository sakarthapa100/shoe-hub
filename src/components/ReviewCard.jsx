import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt="customer" className='rounded-full object-cover w-24 h-24' />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback} </p>
      <div>
        <img src={star} alt="start" width={20} height={20} className='object-cover m-0' />
        <p className='textt-xl font-montserrat text-slate-gray'>({rating} )</p>
      </div>
      <p className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName} </p>
    </div>
  )
}

export default ReviewCard