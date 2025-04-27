import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="bg-[#1E201E]" id='contact'>
                <div className="grid sm:grid-cols-2">
                    <div className="mt-5 p-5 flex flex-col sm:items-center">
                        <div className="text-2xl flex flex-col items-start  sm:mt-15  gap-5">
                            <p className='reveal text-5xl font-bold mb-5'>Contact Me</p>
                            <p className='reveal-left'><i className=" fa-regular fa-envelope mr-4"></i>RTKGroup@gmail.com</p>
                            <p className='reveal-left'><i className="fa-solid fa-phone mr-4"></i>9017554454</p>
                            <div className='reveal-left text-4xl flex gap-4 mb-3'>
                                <p><i className="fa-brands fa-facebook"></i></p>
                                <p><i className="fa-brands fa-instagram"></i></p>
                                <p><i className="fa-brands fa-linkedin"></i></p>
                            </div>
                            <button className='reveal hover:bg-white hover:text-black duration-300 p-2 px-4 bg-[#3C3D37] text-white rounded-[25px] text-lg'>Download CV</button>
                        </div>
                    </div>
                    <div className="sm:m-20 my-8 p-4">
                        <div className="flex flex-col gap-8 items-start ">
                            <input className=' reveal-right bg-[#3C3D37] p-3 pl-5 text-white placeholder-white w-full text-lg sm:text-2xl rounded-[25px]' type="text" placeholder='Enter your name' />
                            <input className=' reveal-right bg-[#3C3D37] p-3 pl-5 text-white placeholder-white w-full text-lg sm:text-2xl rounded-[25px]' type="email" placeholder='Enter your e-mail' />
                            <textarea className=' reveal-right bg-[#3C3D37] p-3 pl-5 text-white placeholder-white w-full text-lg sm:text-2xl rounded-[25px]' placeholder='your message here'></textarea>
                            <input className='reveal hover:bg-[#3C3D37] duration-300 hover:text-white p-2 bg-white text-black rounded-[25px] px-6 text-lg' type='submit' />
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-b from-[#1E201E] to-[#040D12] p-3 sm:p-10 text-white text-center'>
                    <p className='reveal-left'>&copy; <span id="year"></span> Rohit k. All rights reserved.</p>
                    <p className='reveal'>Designed & Developed RTK-G</p>
                </div>
            </div>
        </>
    )
}

export default Contact
