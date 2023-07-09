import React, { useRef, useEffect } from 'react'

import { motion, useInView, useAnimation, animate } from "framer-motion"

import line2 from '../assets/line2.svg'
import skill from '../assets/skills.svg'
import fun from '../assets/forFun.svg'

import { BiRightArrowAlt } from 'react-icons/bi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


const About = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const lineRef = useRef(null)

    const mainControls = useAnimation()

    const revealVariants = {
        hidden: { clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)" },
        visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      };

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div id="aboutComponent" ref={ref} className='bg-black'>
            <div className="">
                <div className='w-full h-56 relative' >

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <h1 className='absolute text-white font-bold text-7xl top-28 left-[10%]'>About.</h1>
                    </motion.div>

                    <motion.img src={line2} alt='line' className='absolute z-10 rounded-3xl
                    top-[13rem] left-[10%]
                    md:left-[22.5rem] md:w-[53%] md:top-[9.5rem] 
                    min-[940px]:w-[56%] min-[940px]:left-[25rem]
                    lg:left-[27rem]
                    xl:w-[64%]' 
                    
                    ref={lineRef}
                    initial='hidden'
                    animate={mainControls}
                    variants={revealVariants}
                    transition={{duration: 0.5, delay: 0.3}}
                    style={{overflow: "hidden"}}
                    />

                </div>

            </div>

            <div className='relative flex flex-col
            md:flex-row'>
                <motion.div className='flex flex-col text-white ml-[10%] mt-3
                text-2xl w-[82%]
                md:w-[50%]'
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    {/* about content */}
                    <div className=''>
                        Hey, my name is Aayush and I’m a full stack developer from Bhopal, Madhya Pradesh. I specialize in the backend, primarily Node, but love building with whatever tools are right for the job.
                    </div>
                    <div className='mb-10 mt-9'>
                        Outside of work, I’m a musician and part of various bands. Any given Sunday you can find me playing some happy tunes in a park or a café. I’m a guitarist btw :)
                    </div>
                    <div className='mb-10
                    lg:mb-10]'>
                        I'm actively looking for new positions where I can practice my love for code. If you think you've got an opening that I might like, let's connect 🔗
                    </div>
                    <div className='flex mb-10 items-center'>

                        <p className='text-[#ADFFFF] font-medium underline underline-offset-4'>My Links</p>
                        <BiRightArrowAlt size={30} className='text-[#ADFFFF] ml-1'/>

                        <a href="https://github.com/aayush-dabral" target='_blank' ><AiFillGithub size={28} className='hover:text-[#ADFFFF] ml-4 mr-3 cursor-pointer'/></a>
                        <a href="https://www.linkedin.com/in/aayush-dabral-1403861b0/" target='_blank' ><AiFillLinkedin size={28} className='hover:text-[#ADFFFF] cursor-pointer'/></a>
                        
                    </div>
                </motion.div>

                <motion.div className='ml-[8%] mt-1 w-[85%]
                md:w-[35%] md:ml-[2.8%]
                lg:w-[30%]
                xl:w-[23%]'
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}

                >
                    {/* skill section  */}
                    <div>
                        <div className='flex'>
                            <img src={skill} alt='skill Icon' className='h-12 w-12' />
                            <h1 className='text-white text-2xl font-black ml-1 mt-1 tracking-wide underline underline-offset-4'>What i use</h1>
                        </div>
                        <div className='flex flex-wrap text-white mt-4
                        '>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>JavaScript</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>HTML</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>CSS</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>React</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Redux</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Tailwind CSS</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Bootstrap</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>MongoDB</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Mongoose</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>NodeJS</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Express</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>C++</span>

                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='flex ml-1'>
                            <img src={fun} alt='fun Icon' className='h-10 w-9 fill-[#ADFFFF]' />
                            <h1 className='text-white text-2xl font-black ml-1 mt-1 tracking-wide underline underline-offset-4'>Familiar with</h1>
                        </div>
                        <div className='flex flex-wrap text-white mt-4
                        '>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Python</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Pandas</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Numpy</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Predictive Modeling</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>SQL</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>MySQL</span>
                            <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold ml-3 mb-3'>Material-UI</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default About
