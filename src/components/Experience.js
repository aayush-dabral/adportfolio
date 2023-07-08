import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import line2 from '../assets/line2.svg'

const Experience = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const lineRef = useRef(null)

    const mainControls = useAnimation()

    const revealVariants = {
        hidden: { clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%" },
        visible: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
    };

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div id="experienceComponent" className='mb-10'>
            <div className='w-full h-56 relative' ref={ref}>

                <motion.img src={line2} alt='line' className='absolute z-10 rounded-3xl
                    top-[14rem] left-[10%]
                    md:left-[4%] md:right-[49%] md:w-[46%] md:top-[10.5rem] 
                    min-[940px]:w-[52%] min-[940px]:left-[8%]
                    lg:left-[10%] lg:w-[53%]
                    xl:w-[56%]
                    2xl:w-[60%]'

                    ref={lineRef}
                    variants={revealVariants}
                    initial="hidden"
                    animate={mainControls}
                    style={{ overflow: "hidden" }}
                    transition={{duration: 0.5, delay: 0.3}}
                />

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <h1 className='absolute text-white font-bold text-6xl top-32 left-[9%]
                    md:right-[5%] md:left-auto
                    lg:right-[10%]
                    2xl:right-[12%]'
                    >Experience</h1>
                </motion.div>

            </div>

            <div className='mt-24 text-2xl text-[#CDCDCD] border-b-[0.2px] border-[#6c6c6c] px-8 pb-8 ml-[4%] mr-[4%]
            lg:ml-[16%] lg:mr-[18.5%] '>
                <div className='flex justify-between'>
                    <h1 className='text-white font-extrabold mr-4'>Aayush Enterprises</h1>
                    <p>2023-present</p>
                </div>
                <div className='flex justify-between my-8'>
                    <h1 className='text-[#ADFFFF] font-bold mr-4'>Freelance Full-stack Developer</h1>
                    <p>Bhopal</p>
                </div>
                <div>
                    <p>I help build and scale the company’s website. Increased throughput of the primary services by 70%. Built the backend service using NodeJS and MongoDB. Also helped make it look prettier.</p>
                </div>

                <div className='flex flex-wrap text-white mt-8 -ml-2
                '>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>React</span>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>Tailwind CSS</span>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>Framer Motion</span>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>NodeJS</span>

                </div>
            </div>

            <div className='mt-20 text-2xl text-[#CDCDCD] border-b-[0.2px] border-[#6c6c6c]  px-8 pb-8 ml-[4%] mr-[4%]
            lg:ml-[16%] lg:mr-[18.5%]'>
                <div className='flex justify-between'>
                    <h1 className='text-white font-extrabold mr-4'>Hospitality Essentials</h1>
                    <p>2023-present</p>
                </div>
                <div className='flex justify-between my-8'>
                    <h1 className='text-[#ADFFFF] font-bold mr-4'>Freelance Full-stack Developer</h1>
                    <p>Rishikesh</p>
                </div>
                <div>
                    <p>Made a comprehensive online platform from scratch for booking rejuvenating yoga retreats all across India.</p>
                </div>

                <div className='flex flex-wrap text-white mt-8 -ml-2
                '>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>React</span>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>Tailwind CSS</span>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>Framer Motion</span>
                    <span className='py-[0.185rem] px-3 bg-[#1e1e1e] rounded-3xl text-xl font-semibold mr-3 mb-3'>NodeJS</span>

                </div>
            </div>

        </div>
    )
}

export default Experience
