import React from 'react'
import { services } from '../constants'
import CardService from '../components/CardService'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap justify-center gap-6 sm:gap-9'>
      {services.map((service)=> (
        <CardService key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services