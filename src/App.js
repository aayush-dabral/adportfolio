import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const { default: HeroSection } = require("./components/HeroSection");

function App() {
  return (
    <>
    <div className='scroll-auto'>
      <Navbar />
      <HeroSection />
      <About />
      <Project />
      <Experience />
    </div>
    </>

  )
}

export default App;
