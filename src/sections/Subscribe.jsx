import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10 ' id='contact-us'>
<h3 className='text-4xl leading-[64px] lg:max-w-md font-palanquin font-bold '>Signup from
  <span className='text-coral-red'>   Update</span> & Newsletter
</h3>
<div className='lg:max-w-[40%]  w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full '>
  <input type="text" placeholder='subscribe@shoe-hub.com'
  className='input' />
  <div>
    <Button label="Signup now" fullWidth />
  </div>
</div>
    </section>
  )
}

export default Subscribe