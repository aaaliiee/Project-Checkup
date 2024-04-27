import React from 'react'
// import { Typed } from 'react-typed' 
const Hero = () => {
    return (
        <div>
            <div className='text-white'>
                <div className='justify-center text-center mx-auto max-w-[800px] h-screen flex flex-col  w-full'>
                    <p className='text-[#00df9a] font-bold md:text-2xl sm:text-1xl '>
                    Where Cleanliness Means So Much</p>
                    <h1  className='md:text-3xl sm:text-2xl text-1xl font-bold md:py-6'> Experience The Difference With Our Expert Touch</h1>
                    <div>
                        <p className='font-bold md:text-2xl sm:text-1xl text-xl'>FAST, FLEXIBLE, PRICED FOR</p>
                        {/* <Typed
                        strings={["clean", "wash"]}
                        typrSpeed={120}
                        backSpeed={140}/> */}
                    </div>
                    <p className='md:text-2xl sm:text-1xk text-xl font-bold text-gray-500'>hi my name is ###ALI</p>
                    <button className=' bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Get Service</button>
                     
                </div>
            </div>

        </div>
    )
}

export default Hero
