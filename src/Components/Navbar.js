import React from 'react';

const Navbar = ()=> {
    return(
           <div id="Home">
    <div className="Pin"> 
        <nav className="navig">
        
       <ul className="append">
       <li className="Json"><a href="#Home"><b>Ultra<span style={{color:'cyan'}}>Hacx</span></b></a></li>
<li className="mb"><a href="#Home">Home</a></li>
<li className="mb"><a href="#About">About</a></li>
<li className="mb"><a href="#Interests">Interests</a></li>
<li className="mb"><a href="#Skills">Skills</a></li>
<li className="mb"><a href="#Projects">Projects</a></li>
<li className="mb"><a href="#Contact">Contact</a></li></ul>

</nav>
<br/>
<br/>

<div class="intro">Hi There,</div>
<div class="gain">I am Utkarsh Dwivedi</div>
<div class="divi">An aspiring UX Designer and a Web Developer</div>
</div>
</div>

       
    )
}
export default Navbar 