import React, { useState } from 'react'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';

import Yoga from '../assets/Yoga-Retreat.jpg'
import Forecast from '../assets/Forecast.jpg'

const Project = () => {


  const slides = [

    <div className='text-white text-xl
    sm:text-2xl
    lg:flex lg:text-xl
    xl:text-2xl'>

      <div className='lg:mt-16 lg:mr-0 lg:w-[50%] '>
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto overflow-hidden
        sm:h-64
        lg:w-[85%] lg:mr-3 
        xl:h-[350px] xl:w-[78%] '>
          <div className='w-full h-full relative '>
            <img src={Yoga} alt='yoga' className='absolute w-[86%] h-[86%] left-1/2 transform -translate-x-1/2 -bottom-2 ' />
          </div>
          
        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:mr-3 lg:ml-[15%]
        xl:w-[78%] xl:ml-[21%] xl:mt-6'>
          <div className='lg:flex'>
            <h2 className='text-white font-bold
            lg:w-[30%]'>Yoga Retreat</h2>

            <div className='flex lg:w-[65%]'>

              <div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
            sm:w-[80%]
            lg:w-[80%]
            xl:w-[84%]' />
              <AiFillGithub className='w-7 h-7 ml-4' />
              <TbExternalLink className='w-7 h-7 ml-4' />

            </div>
          </div>
          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>ReactJS - Tailwind CSS - NodeJs</p>

          <p>A comprehensive online platform for booking rejuvenating yoga retreats worldwide. <span className='text-[#ADFFFF]'>Learn more...</span> </p>
        </div>
      </div>

      <div className='mt-20
      lg:mt-16 lg:mr-0 lg:w-[50%]'>
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto overflow-hidden
        sm:h-64
        lg:w-[85%] lg:ml-3
        xl:h-[350px] xl:w-[78%] '>
          <div className='w-full h-full relative '>
            <img src={Forecast} alt='forecast' className='absolute w-[86%] h-[86%] left-1/2 transform -translate-x-1/2 -bottom-2 ' />
          </div>
        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:ml-5 
        xl:w-[78%] xl:mt-6'>

        <div className='lg:flex'>
          <h2 className='text-white font-bold
          lg:w-[30%]'>Forecasty.....</h2>

          <div className='flex lg:w-[65%]'>

            <div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
            sm:w-[80%]
            lg:w-[77%]' />
            <AiFillGithub className='w-7 h-7 ml-4' />
            <TbExternalLink className='w-7 h-7 ml-4' />

          </div>

        </div>

          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>ReactJS - Bootstrap - Axios - NodeJs</p>

          <p>A comprehensive online weather and news forecast platform. <span className='text-[#ADFFFF]'>Learn more...</span> </p>
        </div>
      </div>
    </div>,


    <div className='text-white  text-xl
    sm:text-2xl
    lg:flex lg:text-xl
    xl:text-2xl'>
      <div className='lg:mt-16 lg:mr-0 lg:w-[50%] '>
        <div className='bg-black w-[70%] rounded-[1.8rem] h-44 mx-auto
        sm:h-64
        lg:w-[85%] lg:mr-3 
        xl:h-[350px] xl:w-[78%] '>

        </div>
        <div className='mx-[16%] mt-3
        lg:w-[85%] lg:mr-3 lg:ml-[15%]
        xl:w-[78%] xl:ml-[21%] xl:mt-6'>
          <div className='lg:flex'>
            <h2 className='text-white font-bold
            lg:w-[30%]'>Yoga Retreat</h2>

            <div className='flex lg:w-[65%]'>

              <div className='w-[70%] h-0 border-[1px] border-[#ffffff] mt-4
            sm:w-[80%]
            lg:w-[80%]
            xl:w-[84%]' />
              <AiFillGithub className='w-7 h-7 ml-4' />
              <TbExternalLink className='w-7 h-7 ml-4' />

            </div>
          </div>
          <p className='text-[#ADFFFF] font-semibold mt-3 mb-3
          lg:mt-5 lg:mb-5'>ReactJS - Tailwind CSS - NodeJs</p>

          <p>A comprehensive online platform for booking rejuvenating yoga retreats worldwide. <span className='text-[#ADFFFF]'>Learn more...</span> </p>
        </div>
      </div>
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
      <div className=''>
        <div className='hidden
        '
        />

        <div className='text-white text-6xl text-center font-bold underline underline-offset-8 mt-6'>
          Project
        </div>

        <div className='hidden
        '
        />
      </div>


      <div className='w-[100%] h-[580px] m-auto py-16 px-2 relative'>
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
              className= {`text-2xl  cursor-pointer `}
            >

              <RxDotFilled className={`${slideIndex === currentIndex ? 'text-[#ADFFFF] -mt-[0.32rem]':'text-white'}`} size={`${slideIndex === currentIndex ? 30:20}`}/>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Project
