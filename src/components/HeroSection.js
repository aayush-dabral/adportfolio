import React from 'react'

import { motion } from 'framer-motion'

import heroImage from '../assets/heroSection.jpg'
import line from '../assets/line.svg'

const HeroSection = () => {
  return (
    <section id="heroComponent" className='relative bg-cover bg-center h-screen bg-black z-10 mb-10' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='absolute text-white leading-10 top-[16rem] font-inter w-fit
        text-[1.5rem] font-medium text-center items-center
        lg:left-[12.5%] lg:text-left lg:top-[18rem]'>

        <motion.div className='lg:ml-4'
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Hi, my name is</motion.div>

        <motion.div className='font-[700] leading-[5rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] 
            mt-0 mb-6 text-[4.5rem]
            lg:mt-3 lg:text-[5.5rem] lg:mx-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >Aayush Dabral</motion.div>

        <motion.img src={line} className='mt-2 mx-auto w-[80%] 
        lg:mx-0 lg:w-[166px] lg:h-[7px]' alt='line'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div className='mt-5 font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
            text-[1.5rem] mx-4
            lg:w-2/3 lg:mx-0'
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur odio tenetur eligendi qui porro rerum fuga dolores quas.</motion.div>
  
        <motion.button className='text-[#ADFFFF] border-2 border-[#ADFFFF] w-44 p-[0.6rem] mx-auto mt-5 text-xl md:hover:text-black
        lg:mx-0 lg:text-center bg-transparent'
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ backgroundColor: '#ADFFFF', transition: {duration: 0.1}}}
        > About me
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
