import React from 'react'
import { imgaddres } from '../assets/assets'

const Navbar = () => {
    return (
        <>
            <div className=" flex items-center justify-between fixed right-0 bg-white z-4 w-full sm:p-5 p-3 ">
                <ul className='hidden sm:flex gap-5 sm:text-lg px-3 text-black' >
                    <li>
                        <a href="#home"><p>Home</p></a>
                    </li>
                    <li>
                        <a href="#about"><p>About</p></a>
                    </li>
                    <li>
                        <a href="#service"><p>Services</p></a>
                    </li>
                    <li>
                        <a href="#portfolio"><p>Portfolio</p></a>
                    </li>
                </ul>

                <img className='w-[200px] ml-[-14px] sm:ml-5' src={imgaddres.logo2} alt="logo image" />

                <div className='mr-5'>
                    <li>
                        <a href="#contact"><button className='sm:text-lg p-2 w-25 border rounded-full bg-[#3C3D37]'>Contact</button></a>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Navbar




