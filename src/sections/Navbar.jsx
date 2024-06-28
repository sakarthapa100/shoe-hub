import React from 'react'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  return (
<header className='padding-x py-8 absolute w-full'>
  <nav className='flex items-center justify-between max-container' >
    <a href="/">
    <img src={headerLogo} alt="logo" height={25} width={140} />
    </a>
<ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden '>
{
  navLinks.map((item)=>{
    return(
    <li key={item.label}>
      <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-700' > {item.label} </a>
    </li>
    )
  })
}
</ul>
<div className='hidden max-lg:block '>
  <img src={hamburger} alt="hamburger" height={24} width={24} />
</div>

  </nav>
</header>
  )
}

export default Navbar