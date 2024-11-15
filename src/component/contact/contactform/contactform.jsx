import React from "react";
import "./contactform.css";
import "https://smtpjs.com/v3/smtp.js"
const ContactForm = () => {
    return (
        <div className="contact-form">
            <form action="https://formspree.io/f/mvoewlwz" method="POST">
                <div className="namme">
                    <input type="text" name="firstname" placeholder="firstname" />
                    <input type="text" name="lastname" placeholder="lastname" />
                </div>
                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3}/>
                <button>SEND</button>
            </form>
        </div>
    )
}
export default ContactForm