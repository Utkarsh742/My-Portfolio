import React from 'react'
import breakingbad from '../images/BreakingBad.png'
import instaclone from '../images/instagramclone.png'
import Intern from '../images/internshipnow.jpg'

const Projects = () => {
    return (
        <div>
            <section id="Projects">
    <div class="black">
        <div>
            <br/>
            
        <h1 className="kit" style={{color: 'white'}}>My Projects</h1>
        <h2 className="container" style={{color:'white'}}>—<span style={{color: 'blue'}}>My Work</span>—</h2>
    </div> 
    <br/>
    <div className="cards2">
        <a href="#" className="second"><div>  
            <img className="images1" src={breakingbad}/>
            <h5 className="heading">Breaking Bad Wiki</h5>
            <p className="text">This project is a Wikipedia of Breaking Bad, one of the most popular TV Series. It has been prepared using HTML, CSS, JavaScript and React JS under Corporate Experience Program of TwoWaits, supervised by Mr. Sanidhya Panwar.</p>
            
             
            <p className="text2">Click Here to Visit</p> </div> </a>
        <a href="#" className="second"><div>

            <img className="images1" src={instaclone}/>
            <h5 className="heading">Instagram Clone</h5>
            <p className="text">This project is a clone web application of social media application Instagram. It has been prepared using HTML, CSS, JavaScript, React JS, Mongo DB and APIs under Corporate Experience Program of TwoWaits, supervised by Mr. Sanidhya Panwar.</p>
            <p className="text2">Click Here to Visit</p>
        </div> </a>
       <a href="#" className="second"> <div>
            <img className="images1" src={Intern}/>
            <h5 className="heading">Internship Now</h5>
            <p className="text">This project is a professional platform for connecting recruiters with potential candidates. It has been prepared using HTML, CSS, MERN Stack and APIs under Corporate Experience Program of TwoWaits, supervised by Mr. Sanidhya Panwar.</p>
            <p className="text2">Click Here to Visit</p>
        </div> </a>

    </div>
    </div>
</section>
        </div>
    )
}

export default Projects
