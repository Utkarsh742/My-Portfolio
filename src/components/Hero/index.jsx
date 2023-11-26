"use client"

import './Home.css'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const index = () => {
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
        <section className="home" id="home">
            <div className="max-width">
                <div className="row">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is</div>
                        <div className="text-2">Utkarsh Dwivedi</div>
                        <div className="text-3">And I'm a <span ref={el} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index