import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [navActive, setNavActive] = useState(false)
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimationControls();

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
                className={`px-6 cursor-pointer ${
                  active === 'home' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                }`}
              >
                <Link to="heroComponent" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer ${
                  active === 'aboutComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                }`}
              >
                <Link to="aboutComponent" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer ${
                  active === 'projectComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                }`}
              >
                <Link to="projectComponent" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer ${
                  active === 'experienceComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                }`}
              >
                <Link to="experienceComponent" smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
              <li
                className={`px-6 cursor-pointer ${
                  active === 'contactComponent' ? 'underline underline-offset-4 decoration-solid text-[#ADFFFF]' : ''
                }`}
              >
                <Link to="contactComponent" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

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
            <li className="py-4 pl-8 underline underline-offset-4 decoration-solid text-[#ADFFFF]">Home</li>
            <li className="py-4 pl-8">About</li>
            <li className="py-4 pl-8">Projects</li>
            <li className="py-4 pl-8">Experience</li>
            <li className="py-4 pl-8">Contact</li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
