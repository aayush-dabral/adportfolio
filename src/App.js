import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";

const { default: HeroSection } = require("./components/HeroSection");

function App() {

  const [current, setCurrent ] = useState('home')
  return (
    <>
    <div className='scroll-auto'>
      <Navbar current={current} setCurrent={setCurrent}/>
      <HeroSection />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
    </>

  )
}

export default App;
