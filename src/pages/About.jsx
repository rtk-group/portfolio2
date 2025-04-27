import React, { useState } from 'react'
import { imgaddres } from '../assets/assets'

const About = () => {
    const [showbox, setshowbox] = useState('a')

    return (
        <>
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 pt-10 bg-[#3C3D37]" id='about'>
                <div className='mx-3 sm:mr-9 flex justify-center'>
                    <img className='reveal-scale rounded-full' src={imgaddres.logo} alt="" />
                </div>

                <div className=" flex flex-col p-7">
                    <p className='reveal text-6xl font-bold'>About Me</p>
                    <p className='reveal-right text-2xl my-10 flex items-end justify-items-end'>Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus sed distinctio at, ipsam corporis facere voluptatibus tempora quaerat repellat blanditiis perspiciatis, adipisci soluta iure provident harum iusto dolores et officiis? sit amet consectetur adipisicing elit. Quasi ea amet, quia est fugit eius neque hic nihil vitae nisi.</p>
                    <ul className='reveal flex gap-5 text-xl'>
                        <p onClick={() => setshowbox('a')}>Skills</p>
                        <p onClick={() => setshowbox('b')}>Experience</p>
                        <p onClick={() => setshowbox('c')}>Education</p>
                    </ul>

                    <div className=' relative w-auto h-48'>
                        <div className={`${showbox === 'a' ? 'w-full' : null} reveal-right transition-all duration-400 absolute w-0 overflow-hidden text-xl mt-5 h-48 rounded font-semibold`}>
                            <p className='mb-1'>Front-end</p>
                            <p className='mb-1'>Backend</p>
                            <p className='mb-1'>SQL</p>
                            <p className='mb-1'>JavaScript</p>
                            <p>Java</p>
                        </div>

                        <div className={`${showbox === 'b' ? 'w-full' : null} transition-all duration-400 absolute w-0 overflow-hidden  h-48 text-2xl mt-5 rounded font-semibold`}>
                            <p>Two years of dedicated learning of MERN Stack</p>
                            <p>from</p>
                            <p>Online documentry, youtube and offline sources</p>
                        </div>

                        <div className={`${showbox === 'c' ? 'w-full' : null} transition-all duration-400 absolute w-0 overflow-hidden text-2xl mt-5 rounded h-48 font-semibold`}>
                            <p>MERN Stack</p>
                            <p>B.Tech</p>
                            <p>From B.K institute T & M</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;