import React, {useRef, useEffect} from 'react'
import { Link } from 'react-scroll'

import { motion, useInView, useAnimation } from 'framer-motion'

import heroImage from '../assets/heroSection.jpg'
import line from '../assets/line.svg'

const HeroSection = () => {

  const lineRef = useRef(null)
  const isInView = useInView(lineRef)

  const mainControl = useAnimation();

  const revealVariants = {
    hidden: { clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)" },
    visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  };

  useEffect(() => {
    if(isInView){
      mainControl.start("visible")
    }
  }, [isInView])

  return (
    <section id="heroComponent" className='relative bg-cover bg-center h-screen bg-black z-10 mb-10' style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='absolute text-white leading-10 top-[16rem] font-inter w-fit
        text-[1.5rem] font-medium text-center items-center
        lg:left-[12.5%] lg:text-left lg:top-[18rem]'>

        <motion.div className='lg:ml-4 font-medium'
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
          
          ref={lineRef}
          variants={revealVariants}
          intitial = "hidden"
          animate = {mainControl}
          transition={{duration: 0.5, delay: 0.1}}
          style={{overflow: "hidden"}}
        />

        <motion.div className='mt-5 font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white 
            text-[1.5rem] mx-4
            lg: lg:mx-0'
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        > 
        Building Dreams in Code | <span className='text-[#ADFFFF] font-medium '>Full Stack Developer & Freelance Enthusiast </span><br/>
        <span className='text-white'>Focused on crafting clean and user-friendly experiences.</span>
        </motion.div>
  
        <motion.button className='text-[#ADFFFF] border-2 border-[#ADFFFF] w-44 p-[0.6rem] mx-auto mt-5 text-xl md:hover:text-black
        lg:mx-0 lg:text-center bg-transparent'
          initial={{ opacity: 0, y: 75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ backgroundColor: '#ADFFFF', transition: {duration: 0.1}}}
        > 
        <Link to="aboutComponent" smooth={true} duration={500}>About me</Link>
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
