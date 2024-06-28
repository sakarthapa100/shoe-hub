import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
  <section id='products' className='max-container max-sm:mt-12 mt-8'>
<div className='flex flex-col justify-start gap-5'>
<h2 className='font-palanquin text-4xl font-bold'> Our 
 <span className='text-coral-red'> Popular </span> 
   Products</h2>
<p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sounght-after selections . Discover a world of comfort , desigine and value </p>

</div>
<div className='mt-16 grid lg:grid-col-3  md:grid-cols-2 xl:grid-cols-4 sm:gap-4 gap-14'>
{
  products.map((product)=>(
   <PopularProductCard key={product.name} {...product} 
   imageURL={product.imgURL}
   />
  ))
}
</div>
  </section>
  )
}

export default PopularProducts