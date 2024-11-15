import React from "react";
import "./contact.css";
import linkiedin from "../assert/linkiedin.jpg"
import github from "../assert/github.jpg"
import ContactInfoCard from "./contact/contactinfocard/contactinfocard";
import ContactForm from "./contact/contactform/contactform";
const ContactMe = () =>{
    return(
        <div className="contact-container">
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{flex:1}}>
                    <ContactInfoCard 
                    iconUrl={linkiedin}
                    text="Linkedin"
                    a="https://www.linkedin.com/in/upasana-singh-269428276/"
                    />
                    <ContactInfoCard 
                    iconUrl={github}
                    text="Github"
                    a="https://github.com/"
                    />
                </div>
                <div style={{flex:1}}>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
export default ContactMe