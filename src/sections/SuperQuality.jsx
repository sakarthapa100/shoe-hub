import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
   <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>

<h1 className='mt-5 font-palanquin text-4xl font-bold max-sm:text-[72px] max-sm:leading-[70px]  '> We Provide You 
 <span className='text-coral-red'> Super  </span>   
   <br />
   Quality Shoe</h1>

   <p className='font-montserrat lg:max-w-lg  text-slate-gray text-lg mt-9 mb-8'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience. We provide unmatched quality, innovation, and a touch of elegance
   </p>
<p className='mt-6 lg:max-w-lg info-text mb-6'>Our dedication to dettail and excellence ensures your satisfaction</p>
<div className='mt-11'>
  <Button label="View Details"  />
</div>

    </div>  
<div className='flex-1 flex justify-center items-center'>
<img src={shoe8} alt="shoe8 " height={900} width={750} className='objectt-contain' />
</div>
   </section>
  )
}

export default SuperQuality