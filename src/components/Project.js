import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';

import DevSage from '../assets/DevSage.png'
import Yoga from '../assets/Yoga-Retreat.jpg'
import Forecast from '../assets/Forecast.jpg'
import CodePlayer from '../assets/CodePlayer.jpg'

const Project = () => {

  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null)
  const isFirstLineInView = useInView(firstLineRef)
  const isSecondLineInView = useInView(secondLineRef)

  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const isSlide1InView = useInView(slide1Ref)
  const isSlide2InView = useInView(slide2Ref)

  const mainControl = useAnimation();

  const leftLineVariants = {
    hidden: { clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%" },
    visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  }

  const rightLineVariants = {
    hidden: { clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)" },
    visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
  }

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  useEffect(() => {
    if (isFirstLineInView) {
      mainControl.start("visible")
    }
    if (isSecondLineInView) {
      mainControl.start("visible")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstLineInView])

  const slides = [

    <motion.div className='text-white text-xl
    sm:text-2xl
    lg:flex lg:text-xl
    xl:text-2xl'
    >
      <motion.div className='lg:mt-16 lg:mr-0 lg:w-[50%] '

      variants={slideVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25 }}
      >
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto overflow-hidden
        sm:h-64
        lg:w-[85%] lg:mr-3 
        xl:h-[350px] xl:w-[78%] '>
          <div className='w-full h-full relative '>
            <img src={DevSage} alt='dev' className='absolute w-[86%] h-[86%] left-1/2 transform -translate-x-1/2 -bottom-2 ' />
          </div>

        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:mr-3 lg:ml-[15%]
        xl:w-[78%] xl:ml-[21%] xl:mt-6'>
          <div className='lg:flex'>
            <h2 className='text-white font-bold
            lg:w-[30%]'>Dev Sage</h2>

            <div className='flex lg:w-[65%]'>

              <div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
              sm:w-[80%]
              lg:w-[80%]
              xl:w-[84%]'
              />
              <a href='https://github.com/aayush-dabral/DevSage' target="_blank"><AiFillGithub className='w-7 h-7 ml-4 hover:text-[#ADFFFF]' /></a>
              <a href='https://devsage.netlify.app/' target="_blank"><TbExternalLink className='w-7 h-7 ml-4 hover:text-[#ADFFFF]' /></a>

            </div>
          </div>
          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>NodeJs - MongoDB - ReactJs - JWT</p>

          <p>A versatile online programming platform compatible with over 50 programming languages.</p>
        </div>
      </motion.div>

      <motion.div className='mt-20
      lg:mt-16 lg:mr-0 lg:w-[50%]'

      variants={slideVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25 }}
      >
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto overflow-hidden
        sm:h-64
        lg:w-[85%] lg:ml-3
        xl:h-[350px] xl:w-[78%] '>
          <div className='w-full h-full relative '>
            <img src={Yoga} alt='yoga' className='absolute w-[86%] h-[86%] left-1/2 transform -translate-x-1/2 -bottom-2 ' />
          </div>
        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:ml-5 
        xl:w-[78%] xl:mt-6'>

          <div className='lg:flex'>
            <h2 className='text-white font-bold
          lg:w-[30%]'>Yoga Retreat</h2>

            <div className='flex lg:w-[65%]'>

              <motion.div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
            sm:w-[80%]
            lg:w-[77%]'
              />
              <a href='https://github.com/aayush-dabral/yoga-retreat-react-app' target="_blank"><AiFillGithub className='w-7 h-7 ml-4 hover:text-[#ADFFFF]' /></a>
              <a href='https://demo-yoga-retreat.netlify.app/' target="_blank"><TbExternalLink className='w-7 h-7 ml-4 hover:text-[#ADFFFF]' /></a>

            </div>

          </div>

          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>ReactJS - Tailwind CSS - NodeJs</p>

          <p>A comprehensive online platform for booking rejuvenating yoga retreats worldwide. </p>
        </div>
      </motion.div>

    </motion.div>,

    <div className='text-white  text-xl
    sm:text-2xl
    lg:flex lg:text-xl
    xl:text-2xl'>
      
      <motion.div className='lg:mt-16 lg:mr-0 lg:w-[50%] '
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25 }}>
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto
        sm:h-64
        lg:w-[85%] lg:mr-3 
        xl:h-[350px] xl:w-[78%] '>
          <div className='w-full h-full relative overflow-hidden'>
            <img src={Forecast} alt='forecast' className='absolute w-[86%] h-[86%] left-1/2 transform -translate-x-1/2 -bottom-2 ' />
          </div>
        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:mr-3 lg:ml-[15%]
        xl:w-[78%] xl:ml-[21%] xl:mt-6'>
          <div className='lg:flex'>
            <h2 className='text-white font-bold
            lg:w-[30%]'>Forecasty</h2>

            <div className='flex lg:w-[65%]'>

              <div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
            sm:w-[80%]
            lg:w-[80%]
            xl:w-[84%]'

              />
              <a href='https://github.com/aayush-dabral/Forcasty--News-and-Weather-Forecast-application-' target='_blank'><AiFillGithub className='w-7 h-7 ml-4 hover:text-[#ADFFFF]' /></a>
            </div>
          </div>
          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>ReactJS - Bootstrap - Axios</p>

          <p>A comprehensive online weather and news forecast platform. </p>
        </div>
      </motion.div>
      
      <motion.div className='mt-20
      lg:mt-16 lg:mr-0 lg:w-[50%]'

      variants={slideVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.25 }}
      >
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto overflow-hidden
        sm:h-64
        lg:w-[85%] lg:ml-3
        xl:h-[350px] xl:w-[78%] '>
          <div className='w-full h-full relative '>
            <img src={CodePlayer} alt='codeplayer' className='absolute w-[86%] h-[86%] left-1/2 transform -translate-x-1/2 -bottom-2 ' />
          </div>
        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:ml-5 
        xl:w-[78%] xl:mt-6'>

          <div className='lg:flex'>
            <h2 className='text-white font-bold
          lg:w-[30%]'>Code Player</h2>

            <div className='flex lg:w-[65%]'>

              <div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
            sm:w-[80%]
            lg:w-[80%]
            xl:w-[84%]'
              />
              <a href='https://github.com/aayush-dabral/yoga-retreat-react-app' target="_blank"><AiFillGithub className='w-7 h-7 ml-4 hover:text-[#ADFFFF]' /></a>

            </div>

          </div>

          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>HTML - CSS - Javascript - jQuery</p>

          <p>An online IDE constructed for providing a user-friendly interface enabling users to write, edit, and run code in real-time.</p>
        </div>
      </motion.div>

    </div>

  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div id="projectComponent" className='h-[80rem] bg-[#0c0c0c] mt-40 pt-8
    sm:h-[87rem]
    lg:h-[55rem]
    xl:h-[65rem]'>
      <div className='lg:flex lg:justify-center lg:items-center lg:rounded-full'>
        <motion.div className='hidden 
        lg:block lg:w-[30%] lg:h-[3px] lg:bg-white lg:mt-10
        '
          ref={firstLineRef}
          variants={leftLineVariants}
          initial="hidden"
          animate={mainControl}
          style={{ overflow: "hidden" }}
        />

        <div className='text-white text-6xl text-center font-bold underline underline-offset-8 mt-6 mx-7
        lg:no-underline'
        >
          Project
        </div>

        <motion.div className='hidden 
        lg:block lg:w-[30%] lg:h-[3px] lg:bg-white lg:mt-10 lg:rounded-full
        '
          ref={firstLineRef}
          variants={rightLineVariants}
          initial="hidden"
          animate={mainControl}
          style={{ overflow: "hidden" }}
        />
      </div>


      <div className='w-[100%] h-[580px] m-auto py-16 px-2 relative '>
        {/* content */}
        <div className='w-full h-full rounded-2xl bg-center bg-cover transition-transform duration-500'>
          {slides[currentIndex]}
        </div>
        <div className='absolute top-[540px] -trasnlate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full text-white cursor-pointer
        sm:top-[580px]
        lg:top-[360px] lg:hover:bg-black lg:hover:rounded-full lg:hover:py-2'>
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className='absolute top-[540px] -trasnlate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full text-white cursor-pointer
        sm:top-[580px]
        lg:top-[360px] lg:hover:bg-black lg:hover:rounded-full lg:hover:py-2'>
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className='flex justify-center py-2 mt-[32rem]
        sm:mt-[40rem]
        lg:mt-[8rem]
        xl:mt-[16rem]'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl  cursor-pointer `}
            >

              <RxDotFilled className={`${slideIndex === currentIndex ? 'text-[#ADFFFF] -mt-[0.32rem]' : 'text-white'}`} size={`${slideIndex === currentIndex ? 30 : 20}`} />
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Project
