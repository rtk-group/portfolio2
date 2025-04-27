import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-[#697565] to-[#3C3D37] w-full p-5 pt-10 sm:py-20 grid sm:grid-cols-[22%_22%_22%_22%] items-center justify-center gap-8 sm:gap-12" id='portfolio'>
                <div className="transition-[box-shadow] duration-300 hover:shadow-2xl reveal relative hover:-top-5 border text-xl sm:py-8 p-5 flex justify-center items-center flex-col rounded-[25px]">
                    <p className='text-5xl font-bold'>RO</p>
                    <p className='text-4xl font-semibold my-2 sm:my-4'>MongoDB</p>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perspiciatis maxime blanditiis distinctio odio eius aliquid, similique optio et reiciendis.
                    </p>
                </div>
                <div className="reveal transition-[box-shadow] duration-300 relative hover:-top-5 hover:shadow-2xl border text-xl sm:py-8 p-5 flex justify-center items-center flex-col rounded-[25px]">
                    <p className='text-5xl font-bold'>HI</p>
                    <p className='text-4xl font-semibold my-4'>Express</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perspiciatis maxime blanditiis distinctio odio eius aliquid, similique optio et reiciendis.
                    </p>
                </div>
                <div className="reveal transition-[box-shadow] duration-300 relative hover:-top-5 hover:shadow-2xl border text-xl sm:py-8 p-5 flex justify-center items-center flex-col rounded-[25px]">
                    <p className='text-5xl font-bold'>T</p>
                    <p className='text-4xl font-semibold my-4'>React.JS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perspiciatis maxime blanditiis distinctio odio eius aliquid, similique optio et reiciendis.
                    </p>
                </div>
                <div className="reveal transition-[box-shadow] duration-300 relative hover:-top-5 hover:shadow-2xl border text-xl sm:py-8 p-5 flex justify-center items-center flex-col rounded-[25px] ">
                    <p className='text-5xl font-bold'>KR</p>
                    <p className='text-4xl font-semibold my-4'>Node.JS</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perspiciatis maxime blanditiis distinctio odio eius aliquid, similique optio et reiciendis.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Portfolio