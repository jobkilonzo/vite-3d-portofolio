import React from 'react'

import { socialLinks } from '../constants'

const Footer = () => {
  return (
     <footer className='flex xsm:flex-col md:flex-row flex-row justify-center items-center sm:gap-18 md:gap-52 h-20'>
       <div className='md:text-xl text-xl font-semibold xsm:text-sm md:mb-0 xsm:mb-2'>
        &#169; {new Date().getFullYear()} Job Peter
       </div>
       <div className='flex flex-row sm:gap-2 md:gap-3 gap-3'>
        {socialLinks.map((socialLink) => (
          <a target='_black' href={socialLink.link}>
            <img className='xsm:w-[25px] md:w-[40px] w-[40px]' src={socialLink.iconUrl} alt="" />
          </a>
        ))}
       </div>
     </footer>
  )
}

export default Footer