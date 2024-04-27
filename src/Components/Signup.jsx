import React from 'react'

const Signup = () => {
    return (
        <div className='w-full py-16 px-4 text-white'>
            <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
                <div className='lg;:col-span-2 my-4 '>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Want To Get A Service and Tools!</h1>
                    <p>@Sign up to our Customer Services and Guide@</p>

                </div>
                <div className='my-4 '>
                    <div className='flex flex-col sm:flexrow items-center justify-between w-full'>


                    <input className=' p-3 flex w-full text-black' type="email" placeholder='Enter Email' />

                    <button className=' bg-[#00df9a] w-[160px] rounded-md font-bold my-6 ml-4 mx-auto h-[45px] py-3 text-black'>Notify Me</button>
                    </div>
                    <p>we care bout the protect of your data and privacy </p>
                </div>


            </div>

        </div>
    )
}

export default Signup
