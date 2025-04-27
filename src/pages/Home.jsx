import React from 'react'
import { imgaddres } from '../assets/assets.js'

const Home = () => {

    return (
        <>
            <div className=" grid grid-cols-1 bg-gradient-to-b from-[#ECDFCC] to-[#697565] sm:grid-cols-2 text-black" id='home'>
                <img src={imgaddres.img1} alt="" className='reveal-scale rounded-br-[400px]' />
                <div className=" flex items-center flex-col justify-center text-2xl sm:text-5xl font-bold">
                    <span className=' reveal mt-5 sm:mb-4 bg-gradient-to-l from-[#697565] to-[#040D12] text-transparent bg-clip-text'>Hello i am Rohit kumar</span>
                    <p className='reveal-right animate-pulse mt-2 pb-2'> profeshional web developer</p>
                </div>
            </div>
        </>
    )
}

export default Home
