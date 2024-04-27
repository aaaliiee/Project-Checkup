import React from 'react'
import single from '../images/single.png'
// import Double from '../images/single.png'
// import triple from '../images/triple.png'

const Card = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-gray-200'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                        <h2 className='text-2xl font-bold text-center py-8'>Standard</h2>
                        <p className='text-center text-2xl font-medium'>30$</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>CLean Glasses services</p>
                            <p className='py-2 border-b mx-8 '>Proch washing services  </p>
                            <p className='py-2 border-b mx-8'>fixing and cleaning services </p>
                        </div>

                        <button className=' bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black items-center'>Get Service</button>

                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                        <h2 className='text-2xl font-bold text-center py-8'>Premieum</h2>
                        <p className='text-center text-2xl font-medium'>60$</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>CLean Glasses services</p>
                            <p className='py-2 border-b mx-8 '>Proch washing services  </p>
                            <p className='py-2 border-b mx-8'>fixing and cleaning services </p>
                        </div>

                        <button className=' bg-black  w-[160px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a] items-center'>Get Service</button>

                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                        <h2 className='text-2xl font-bold text-center py-8'>User Package</h2>
                        <p className='text-center text-2xl font-medium'>50$</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>CLean Glasses services</p>
                            <p className='py-2 border-b mx-8 '>Proch washing services  </p>
                            <p className='py-2 border-b mx-8'>fixing and cleaning services </p>
                        </div>

                        <button className=' bg-[#00df9a] w-[160px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black items-center'>Get Service</button>

                    </div>

            </div>

        </div>
    )
}

export default Card
