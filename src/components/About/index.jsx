"use client"
import Image from 'next/image';
import './About.css'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';

const About = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Learner", "Developer", "Designer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    
  return (
    // about section start
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <Image src="/assets/MyPic.jpeg" alt="Profile Image" width={400} height={400}/>
                </div>
                <div className="column right">
                    <div className="text">I'm Utkarsh and I'm a <span ref={el} /></div>
                    <p>I am a 3rd-year B.Tech CSE student at Lovely Professional University, Phagwara, Punjab.
                        I scored a percentage of 80.0% in Class 12th, ISC Board at Spring Dale College, Lucknow, and also scored 86.75% in Class 10th, ICSE Board at Spring Dale College, Lucknow. I love dedicating my time to various activities, competitions, hackathons, and events as I find them refreshing.</p>
                    <Link href="./assets/UtkarshDwivediResume.pdf" target="_blank" className='cv_link'>Open CV</Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About
