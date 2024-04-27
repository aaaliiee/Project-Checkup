import React from 'react'
import pic3 from '../images/pic3.jpg'
// import pic2 from '../images/pic2.jpg'
// import pic3 from '../images/pic3.jpg'
const Mid = () => {
  return (
    <div className='w-full  bg-gray-400 py-16 px-8'>
      <div className='max-w-[1280px] mx-auto grid md:grid-col-2 ' >
        <div className='w-[250px] h-[280px]  my-y mx-auto justify-center gap-8 py flex'>

          <img  className='rounded-3xl' src={pic3} alt="/" />
          <img  className='rounded-3xl' src={pic3} alt="/" />
          <img  className='rounded-3xl' src={pic3} alt="/" />



        </div>
        <div>

        </div>

      </div>

    </div>
  )
}

export default Mid
