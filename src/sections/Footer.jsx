import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { footerLogo, headerLogo } from '../assets/images'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
   <footer className='max-container'>

<div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
<div className='flex flex-col items-start'>
  <a href="/">
  <img src={headerLogo} alt="footer-logo"  height={46} width={150}/></a>
  <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
    
    Get shoes ready for the new tearm at your nearest nike sotre.find your perfect size in store. Get Rewards.
  </p>
<div className='flex items-center gap-5 mt-8'>
  {socialMedia.map((icon)=> (
    <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
      <img src={icon.src} alt={icon.alt} width={24}  height={24}/>
    </div>
  ))}
</div>

</div>
<div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
{
  footerLinks.map((section)=>(
    <div key={section}>
<h4 className='font-montserrat text-white-400 text-2xl leading-normal font-medium mb-6 '>{section.title} </h4>
<ul className=''>
  {section.links.map((link)=> (
    <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursoer-pointer'>
      <a href="">{link.name} </a>
    </li>
  ))}
</ul>
    </div>
  ))
}
</div>
</div>
 <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
  <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
    <img src={copyrightSign} alt="" width={20 } height={20} className='rounded-full m-0' />
    <p className='font-montserrat text-base leading-7'>Terms & Conditions</p>
  </div>
 </div>
   </footer>
  )
}

export default Footer