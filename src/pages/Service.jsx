import React from 'react'
import { imgaddres } from '../assets/assets'

const Service = () => {
    return (
        <>
            <div className='grid w-full sm:pt-28 grid-cols-2 sm:grid-cols-[400px_400px_400px] py-8 bg-gradient-to-b from-[#3C3D37] to-[#1E201E] gap-5 sm:gap-10 px-5 justify-center ' id='service'>
                <div className="reveal group relative rounded-2xl overflow-hidden">
                    <img src={imgaddres.ser1} alt="" />
                    <div className="text-white group-hover:h-full h-0 transition-all duration-700  bg-gray-400/25 w-full absolute bottom-0 flex
                    items-center justify-center flex-col overflow-hidden">
                        <p className='text-3xl font-bold'>FRONT-END</p>
                        <p className='text-xl mx-5 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis unde iste nihil explicabo </p>
                        <img className='w-12' src={imgaddres.check} alt="" />
                    </div>
                </div>
                <div className="reveal max-w-[400px] group relative rounded-2xl overflow-hidden">
                    <img src={imgaddres.ser2} alt="" />
                    <div className="text-white group-hover:h-full h-0 bg-gray-400/25 w-full transition-all duration-700 absolute bottom-0 flex items-center justify-center flex-col overflow-hidden">
                        <p className='text-3xl font-bold'>BACKEND-END</p>
                        <p className='text-xl mx-5 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis unde iste nihil explicabo </p>
                        <img className='w-12' src={imgaddres.check} alt="" />
                    </div>
                </div>
                <div className="reveal max-w-[400px] group relative rounded-2xl overflow-hidden">
                    <img src={imgaddres.ser3} alt="" />
                    <div className="text-white group-hover:h-full h-0 bg-gray-400/25 w-full transition-all duration-700  absolute bottom-0 flex items-center justify-center flex-col overflow-hidden">
                        <p className='text-3xl font-bold'>MERN Stack</p>
                        <p className='text-xl mx-5 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At omnis unde iste nihil explicabo </p>
                        <img className='w-12' src={imgaddres.check} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service