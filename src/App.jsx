import { useState } from 'react'
import { Footer, Hero, Navbar, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality  ,CustomerReviews }  from './sections/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<main className='relative'>
<Navbar/>
<section className='xl:padding-l wide:padding-r padding-b'>
  <Hero/>

  <section className='padding'>
  <PopularProducts/>
  </section>
  <section className='padding'>
<SuperQuality/>
  </section>

  <section className='padding'>
  <Services/>
  </section>
  <section className='padding'>
  <SpecialOffer/>
  </section>
  <section className='bg-pale-blue padding'>
  <CustomerReviews/>
  </section>

  <section className='padding-x sm:py-32 py-16 w-full'>
<Subscribe/> 
  </section>

  <section className='bg-black padding-x padding-t pb-16'>
  <Footer />
  </section>


</section>

</main>
    </>
  )
}

export default App
