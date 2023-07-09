import React from 'react'

import { HiMail } from 'react-icons/hi'
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import potrait from '../assets/potrait.jpg'


const Contact = () => {
    return (
        <div id="contactComponent" className='text-xl mb-44 pt-14
        semiXl:text-2xl'>
            <div>
                {/* heading section */}
                <h1 className='h-24 text-[#ADFFFF] text-6xl text-center mt-12 font-bold drop-shadow-glow mb-4' >Contact</h1>
                {/* contact Content */}
                <p className='text-white text-center mb-16 mx-3
                md:mx-24
                min-[930px]:mx-40
                semiXl:mx-64
                xl:mx-80
                '>Shoot me an email if you want to connect! You can also find me on <span className='text-[#ADFFFF]'>LinkedIn</span> or <span className='text-[#ADFFFF]'>Instagram</span> if that's more your speed.</p>
            </div>
            <div className='flex flex-col w-[90%] mx-auto items-center shadow-[#ADFFFF] shadow-[0px_2px_60px_-35px_rgba(173,255,255,0.25)] rounded-xl overflow-hidden
            md:flex-row
            min-[930px]:w-[75%] 
            lg:w-[78%]
            semiXl:w-[73%]
            xl:w-[68%]
            2xl:w-[65%]'>
                <div className='flex flex-col w-full items-center'>

                    <div className='w-full text-center'><p className='text-[#62FFFF] mb-4 mt-4 font-medium'>Find me on</p></div>

                    <div className='w-[80%] bg-[#0c0c0c] rounded-xl
                    md:w-[90%]
                    lg:w-[80%]'>

                        <div className='ml-4 mr-4 mt-8 flex flex-col items-center
                        min-[550px]:flex-row min-[550px]:ml-14
                        md:ml-4'>
                            {/* Mail  */}
                            <HiMail size={30} className='text-[#ADFFFF]' />
                            <a href='mailto:aayush05dabral@gmail.com' target='_blank' ><p className='text-white hover:underline hover:underline-offset-4
                            min-[550px]:ml-6'>aayush05dabral@gmail.com</p></a>
                        </div>

                        <div className='ml-4 mr-4 mt-10 flex flex-col items-center
                        min-[550px]:flex-row min-[550px]:ml-14
                        md:ml-4'>
                            {/* Linkedin  */}
                            <AiFillLinkedin size={30} className='text-[#ADFFFF]' />
                            <a href='https://www.linkedin.com/in/aayush-dabral-1403861b0/' target='_blank' ><p className='text-white hover:underline hover:underline-offset-4
                            min-[550px]:ml-6'>@aayush-dabral</p></a>
                        </div>

                        <div className='ml-4 mr-4 mt-10 mb-8 flex flex-col items-center
                        min-[550px]:flex-row min-[550px]:ml-14
                        md:ml-4'>
                            {/* Instagram  */}
                            <AiFillInstagram size={30} className='text-[#ADFFFF]' />
                            <p className='text-white hover:underline hover:underline-offset-4 cursor-pointer
                            min-[550px]:ml-6'>@aayush.__.dabral</p>
                        </div>

                    </div>
                    <a href='mailto:aayush05dabral@gmail.com' className='bg-[#ADFFFF] hover:bg-opacity-60 hover:text-white text-black mt-4 mb-4 px-4 py-1 self-center rounded-md text-lg font-medium
                    md:self-end md:mr-[5%]
                    lg:mr-[10%]'><div className=''>
                        {/* Chat  */}
                        <p>Let's Chat</p>
                    </div></a> 
                </div>
                <div className='w-[80%] h-full rounded-3xl overflow-hidden'>
                    {/* Image  */}
                    <img src={potrait} alt='potrait' className='h-fit'/>
                </div>
            </div>
        </div>
    )
}

export default Contact
