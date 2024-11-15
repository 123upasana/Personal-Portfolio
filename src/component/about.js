import "./about.css"
import React from 'react'
import img1 from "../assert/about2.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <h1>About Me</h1>
                <div className="aboutme">
                    <p>
                        I am a passionate web developer with a strong foundation 
                        in data structure problem-solving. With experience in creating 
                        dynamic websites and applications, I bring technical expertise 
                        and creativity to every project I undertake.<br/><br/> My Work spans across
                        various technologies, including <b> React.js, Node.js, MondoDB,Django, 
                        Express.js and PHP</b>, with a focus on building efficient, user-friendly, and scalable
                        web solution and try to use <b>algorithms to solve the real-world problems</b>
                        .<br/><br/> Additionally my <b>problem-solving skills in data structures </b>allow me to 
                        optimize and innovate, ensuring that my code is not functional but also 
                        highly efficient

                    </p>
                </div>
            </div>
            <div className="about-right">
                
                    <img src={img1} alt={img1} />
                
            </div>
        </div>
        
    )
};
export default About;