"use client";
import {About, Contact, Footer, Hero, Interests, Navbar, Projects, Skills} from '../components'
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleClicked = () => {
    window.scrollTo(0,0)
  }
  return (
     <div>
    <div className={`scroll-up-btn ${showScrollButton ? 'show' : ''}`} onClick={handleClicked}>
        <FaAngleUp/>
    </div>
     <Navbar/>
     <Hero/>
     <About/>
     <Interests/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     </div>
  )
}
