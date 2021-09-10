import React from 'react'

const Contacts = () => {
    return (
        <div>
            <section id="Contact" class="contact">
                <div class="max-width">
            <div> 
        <h1 class="kit">Contact Me</h1>
       <h2 class="container">—<span style={{color: 'blue'}}>Get in Touch</span>—</h2>
    </div>
            
            <div class="contact-content">
                <div class="column left">
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Utkarsh Dwivedi</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Lucknow,Uttar Pradesh</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">udwivedi742@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">
                        <q>If you are still looking for that one person who will change your life,
                        take a look in the mirror.</q>
                        <br/>
                    </div>
                    <cite>-Roman Price</cite>
                </div>
            </div>
            </div>
    </section>
        </div>
    )
}

export default Contacts
