import "./heroimg2.css"
import React from 'react'
import react from "../assert/react.jpg"
import html from "../assert/html.jpg"
import cssicon from "../assert/cssicon.jpg"
import javascript from "../assert/javascript.jpg"
import anime from "../assert/anime.jpg"
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h3>I'm Upasana Singh</h3>
                <h2>Data Structures and Algorithms | Web Developer</h2>
               <p>
                Expertise in MERN stack development, creating fast, secure, and scalable web application 
               </p>
            </div>
            <div className="hero-img"> 
                <div >
                    <div className="tech-icon">
                        <img src={react} alt="sorry"/>
                    </div>
                    <img src={anime} alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src={html} alt=" "/>
                    </div>
                    <div className="tech-icon">
                        <img src={cssicon} alt=" " />
                    </div>
                    <div className="tech-icon">
                        <img src={javascript} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Hero;