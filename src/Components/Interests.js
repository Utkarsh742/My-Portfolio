import React from 'react'

const Interests = () => {
    return (
        <div>
            <section id="Interests">
    <div className="black">
        <div>
            <br/>
            
        <h1 className="kit" style={{color: 'white'}}>My Interests</h1>
        <h2 className="container" style={{color:'white'}}>—<span style={{color: 'blue'}}>Things I love</span>—</h2>
    </div>
    <br/>
    <div className="cards">
        <a href="https://www.hackerrank.com/udwivedijobs" className="first"><div>  
            <i className="fas fa-code fateq"></i> 
            <h5 className="heading">Competetive Coding</h5>
            <p className="text">I am passionate for coding and overtime it has become my habit to code atleast once a day.I always prefer coding on Competetive Coding Platforms such as Codechef and Codeforces.</p>        
        </div> </a>
        <a href="https://codepen.io/your-work/" className="first"><div>

            <i className="fas fa-paint-brush"></i>
            <h5 className="heading">Web Designing</h5>
            <p className="text">I enjoy developing websites and improving my abilities by learning new ones and putting them into practise.It has been a really amazing experience while learning and implementing my knowledge.</p>

        </div> </a>
       <a href="https://www.spotify.com/in-en/" className="first"> <div>
            <i className="fas fa-music"></i>
            <h5 className="heading">Music</h5>
            <p className="text">Music is the wine that fills the cup of silence. Listening to Music and discovering unheard melodies is my hobby.Moreover, I love singing and therefore took part in many competitions and won most of them.</p>
        </div> </a>
    </div>
</div>
</section>
        </div>
    )
}

export default Interests
