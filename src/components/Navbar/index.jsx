"use client";
import './Navbar.css'
import Link from 'next/link'
import { useState,useEffect,useRef } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const index = () => {

    const [active, setActive] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
              navbarRef.current.classList.add('sticky');
            } else {
              navbarRef.current.classList.remove('sticky');
            }
          };
  
      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Detach the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 

    const handleActive = () => {
       setActive(!active);
    }

    return (
        <div>
            <nav className={`navbar`} ref={navbarRef}>
                <div className="max-width">
                    <div className="logo"><a href="#"><span>Portfo</span>lio.</a></div>
                    <ul className={`menu ${active === true ? 'active' : '' }`}>
                        <li onClick={() => setActive(false)}><Link href="#home" className="menu-btn nav-links">Home</Link></li>
                        <li onClick={() => setActive(false)}><Link href="#about" className="menu-btn nav-links">About</Link></li>
                        <li onClick={() => setActive(false)}><Link href="#interests" className="menu-btn nav-links">Interests</Link></li>
                        <li onClick={() => setActive(false)}><Link href="#skills" className="menu-btn nav-links">Skills</Link></li>
                        <li onClick={() => setActive(false)}><Link href="#projects" className="menu-btn nav-links">Projects</Link></li>
                        <li onClick={() => setActive(false)}><Link href="#contact" className="menu-btn nav-links">Contact</Link></li>
                    </ul>
                    <div className={`menu-btn ${active === true ? 'active' : '' }`} onClick={handleActive}>
                        {
                            active==true ? 
                            <IoMdClose className='bars'/>
                            :
                            <FaBars/>
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default index