import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'


const SpecialOffer = () => {
  return (
   <section className='flex justify-wrap  items-center max-xl:flex-col-reverse gap-8 max-container '  >
    <div className='flex-1 xl:flex '>
      
        <img src={offer} alt="offer img" height={687} width={773}  className=''/>
      
         <div className='flex flex-1 flex-col mt-8'>

<h1 className='mt-5 font-palanquin text-4xl font-bold max-sm:text-[72px] max-sm:leading-[70px]  '> 
 <span className='text-coral-red'> Special  </span>   
   
   Offer</h1>

   <p className='font-montserrat lg:max-w-lg  text-slate-gray text-lg mt-9 mb-8'>Embark on a shopping journey that redefines your experience with unbeatable deals, from premier selections to incredible savings. We offer unparalleled value that sets us apart.
   </p>
<p className='mt-5 lg:max-w-lg info-text mb-6'>Navigate a realm of possiblities designed to fulfil your unique desires surpassing the loftiest expectation. Your journey with us is nothing short of exceptional.</p>
<div className='mt-11 flex flex-wrap gap-4'>
  <Button label="Shop now"
  iconURL={arrowRight}  />
  <Button label="Learn more"
  backgroundColor="bg-white"
  borderColor="border-slate-gray"
  textColor="text-slate-gray"
  />
  

</div>

    </div>  
    </div>

   </section>
  )
}

export default SpecialOffer