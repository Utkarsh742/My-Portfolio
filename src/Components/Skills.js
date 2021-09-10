import React from 'react'

const Skills = () => {
    return (
        <div>
            <section id="Skills" style={{paddingBlockEnd: '14vh'}}>
    <div> 
        <h1 class="kit">My Skills</h1>
       <h2 class="container">—<span style={{color: 'blue'}}>My Learnings</span>—</h2>
    </div>
    <div class="skill">
        <div class="con">
      <h2>My Skills and Self Learnings</h2>
      <p className="size">I have impressive content writing skills. I can write content for blogs, emails, social media posts, magazine articles etc.</p>

       <p className="size">I possess exceptional leadership abilities and I know how to help my team members while completing and getting destined amount of work completed on time, without spoiling personal relations with them.</p>
        
        <p className="size">I am a web development enthusiast and I aim to achieve a feat by learning and implementing full stack web development by the end of 2nd year of college. This would enable me to grab good internship opportunities early on.</p>
    </div>
    <div style={{display:'block', marginLeft: '10vh'}}>
    <div class="skright">
        <h3 class="header">Content Writing</h3>
        <div style={{display: 'inline-flex'}}>
    <progress class="skillbar" value="90" max="100"></progress>
    <p style={{marginTop: '-0.5vh', paddingLeft: '3vh'}}>90%</p>
</div>
     
    </div>
    <div class="skright">
        <h3 class="header">Competitive Coding</h3>
        <div style={{display: 'inline-flex'}}>
    <progress class="skillbar" value="70" max="100"></progress>
    <p style={{marginTop: '-0.5vh', paddingLeft: '3vh'}}>70%</p>
</div>
     
    </div>
    <div class="skright">
        <h3 class="header">Web Development</h3>
        <div style={{display: 'inline-flex'}}>
    <progress class="skillbar" value="90" max="100"></progress>
    <p style={{marginTop: '-0.5vh', paddingLeft: '3vh'}}>90%</p>
</div>
     
    </div>
    <div class="skright">
        <h3 class="header">Java Language</h3>
        <div style={{display: 'inline-flex'}}>
    <progress class="skillbar" value="60" max="100"></progress>
    <p style={{marginTop: '-0.5vh',paddingLeft: '3vh'}}>60%</p>
</div> 
    </div>
    </div>
</div>
<div style={{marginTop: '6vh'}}>
<a href="https://www.linkedin.com/in/utkarsh-dwivedi-465974199/" className="LinkedIn"><span style={{color:'rgb(2, 2, 212)'}}>Go To</span><span style={{color:'cyan'}}> My LinkedIn</span></a>
</div>
</section>
        </div>
    )
}

export default Skills
