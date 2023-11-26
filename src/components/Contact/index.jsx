import React from 'react';
import './Contact.css';
import { FaEnvelope, FaUser, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="icons">
                            <div className="row">
                                <FaUser className='icons' />
                                <div className="info">
                                    <p className="head">Name</p>
                                    <p className="sub-title">Utkarsh Dwivedi</p>
                                </div>
                            </div>
                            <div className="row">
                                <FaMapMarkerAlt className='icons' />
                                <div className="info">
                                    <p className="head">Address</p>
                                    <p className="sub-title">Lucknow</p>
                                </div>
                            </div>
                            <div className="row">
                                <FaEnvelope className='icons' />
                                <div className="info">
                                    <p className="head">Email</p>
                                    <p className="sub-title">udwivedi742@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">
                            <q>Whenever you feel like giving up, just think why you started it in the first place and this will give you enough motivation to keep going and succeed</q>
                            <br />
                        </div>
                        <cite>-Utkarsh Dwivedi</cite>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contact;
