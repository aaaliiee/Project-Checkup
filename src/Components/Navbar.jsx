import React, {useState} from 'react'

import { IoMenu } from "react-icons/io5";
import { TiThMenuOutline } from 'react-icons/ti';
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='text-white flex justify-between mx-auto items-center max-w-[1240px] px-24  h-24'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '>Bilal.co</h1>
            <ul className="hidden md:flex  ">
                <li className='p-4 hover:scale-105 duration-300'>Home</li>
                <li className='p-4 hover:scale-105 duration-300'>Services</li>
                <li className='p-4 hover:scale-105 duration-300'>Equipments</li>
                <li className='p-4 hover:scale-105 duration-300'>About</li>
                <li className='p-4 hover:scale-105 duration-300'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <IoMenu size={25} /> : < TiThMenuOutline size={25} />}
            </div>
                {/* for Mobile app Responsive */}
            < div className= {!nav ? 'fixed left-0 top-0 h-full border-r border-r-purple-900 w-[60%] bg-purple-600 ease-in-out duration-500' : 'fixed left-[-100%]' }>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 '>Bilal.co</h1>
                < ul className=" pt-1 uppercase p-4 ">
                    <li className='p-4 border-b border-green-400 hover:scale-105 duration-300'>Home</li>
                    <li className='p-4 border-b border-green-400 hover:scale-105 duration-300'>Services</li>
                    <li className='p-4 border-b border-green-400 hover:scale-105 duration-300'>Equipments</li>
                    <li className='p-4 border-b border-green-400 hover:scale-105 duration-300'>About</li>
                    <li className='p-4 border-b border-green-400 hover:scale-105 duration-300'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
