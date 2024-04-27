import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
}
 from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-black text-white'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BILAL.co</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ad esse deserunt maxime molestiae vel quo maiores ducimus, placeat suscipit sequi dolor magnam earum quod impedit natus accusantium eaque aliquid!</p>
        </div>
        <div className='flex justify-between md:w-[75%] my-6 '>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
        <div>
            <h2>ALi GUlZAR || ALL Rights Are Reserved</h2>
        </div>

      
    </div>
  )
}

export default Footer
