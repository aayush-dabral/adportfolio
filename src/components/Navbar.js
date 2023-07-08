import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ current, setCurrent }) => {
  const [active, setActive] = useState('home');
  const [navActive, setNavActive] = useState(false)
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimationControls();

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          // Update the current tab based on the targetId
          setCurrent(targetId);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    });

    const sectionIds = ['heroComponent', 'aboutComponent', 'projectComponent', 'experienceComponent', 'contactComponent'];

    sectionIds.forEach((id) => {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        observer.observe(targetSection);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const targetSection = document.getElementById(id);
        if (targetSection) {
          observer.unobserve(targetSection);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 100,
        transition: { duration: 0.4 },
      });
    } else {
      animation.start({
        y: -90,
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [isInView]);

  const handleOnClick = () => {
    const targetComponent = document.querySelector('[name="aboutComponent"]');
    if (targetComponent) {
      targetComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed flex flex-col w-full z-50">
        <div className="absolute w-full bg-black z-40 opacity-80 backdrop-blur-lg flex items-center justify-between h-[5rem] lg:justify-center lg:h-[6.2rem]">
          <div className="absolute text-white z-50 left-8 w-20">
            <img src={logo} alt="logo" />
          </div>
          <div className="here">
            <ul className="hidden text-white text-[1.08rem] font-medium lg:flex">
              <li
                className={`px-6 cursor-pointer hover:text-[#ADFFFF] ${current === 'heroComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                  }`}
              >
                <Link to="heroComponent" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer hover:text-[#ADFFFF] ${current === 'aboutComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                  }`}
              >
                <Link to="aboutComponent" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer hover:text-[#ADFFFF] ${current === 'projectComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                  }`}
              >
                <Link to="projectComponent" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer hover:text-[#ADFFFF] ${current === 'experienceComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                  }`}
              >
                <Link to="experienceComponent" smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer hover:text-[#ADFFFF] ${current === 'contactComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                  }`}
              >
                <Link to="contactComponent" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <motion.button className='hidden absolute text-white bg-transparent border-[3px] border-[#ADFFFF] w-40 p-[0.4rem] right-10 text-xl rounded-lg font-semibold
          lg:block md:hover:text-black 
          lg:mx-0 lg:text-center '
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.7 }}
            whileHover={{ backgroundColor: '#ADFFFF', transition: { duration: 0.1 } }}
          > Resume
          </motion.button>

          <FaBars
            size={30}
            className="text-[#ADFFFF] mr-8 lg:hidden"
            onClick={() => {
              setNavActive(!navActive);
            }}
          />
        </div>

        <motion.div
          className={`${navActive ? 'bg-black bg-opacity-60 backdrop-blur-md text-[1.28rem]' : 'hidden'} lg:hidden`}
          ref={ref}
          animate={animation}
        >
          <ul className="text-white pt-20">
            <li className={`py-4 pl-8 cursor-pointer hover:text-[#ADFFFF] ${current === 'heroComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
              }`}
            >
              <Link to="heroComponent" smooth={true} duration={500}>
                Home
              </Link>
            </li>

            <li className={`py-4 pl-8 cursor-pointer hover:text-[#ADFFFF] ${current === 'aboutComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
              }`}
            >
              <Link to="aboutComponent" smooth={true} duration={500}>
                About
              </Link>
            </li>

            <li className={`py-4 pl-8 cursor-pointer hover:text-[#ADFFFF] ${current === 'projectComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
              }`}
            >
              <Link to="projectComponent" smooth={true} duration={500}>
                Projects
              </Link>
            </li>

            <li className={`py-4 pl-8 cursor-pointer hover:text-[#ADFFFF] ${current === 'experienceComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
              }`}
            >
              <Link to="experienceComponent" smooth={true} duration={500}>
                Experience
              </Link>
            </li>

            <li className={`py-4 pl-8 cursor-pointer hover:text-[#ADFFFF] ${current === 'contactComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
              }`}
            >
              <Link to="contactComponent" smooth={true} duration={500}>
                Contact
              </Link>
            </li>

            <li>
              <motion.button className='py-4 pl-8 w-full text-white border-[1px] font-bold bg-[#ADFFFF] text-left
              lg:hidden
              ' 
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 0.7 }}
                whileHover={{ backgroundColor: '#ADFFFF', transition: { duration: 0.1 } }}
              > Resume
              </motion.button>
            </li>

          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
