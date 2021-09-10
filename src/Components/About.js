import React from 'react'
import Prof from '../images/Pro Pic.jpeg'
import cv from '../images/My Cv.pdf'
const About = () => {
    return (
        <div>
           <section id="About">
    <div> 
    <h1 className="kit">About Me</h1>
   <h2 className="container">-<span style={{color: 'blue'}}>Know Me Better</span>-</h2>
</div> 
<div className="about">
    
    <img className="images" src={Prof} alt="Me"/>
    <div className="class">
    <h2><span style={{color:'blue'}}>I'm Utkarsh and</span> <span style={{color:'cyan'}}>I'm a Developer</span></h2>
    <p style={{fontWeight: 'normal'}}>I am a Full Stack Web Development Intern @TwoWaits | DSA Scholar Intern @TwoWaits | Graphic Designer and Streamer @NoobArmy | B.Tech CSE 24' @Lovely Professional University | Coder | Learner | Achiever</p>
        <br/>
       <a href={cv} className="button"><span style={{color:'rgb(2, 2, 212)'}}>Open</span><span style={{color:'cyan'}}> cv</span></a>
    </div>

</div>
</section> 
        </div>
    )
}

export default About
