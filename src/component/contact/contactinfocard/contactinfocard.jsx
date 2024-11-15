import React from "react";
import "./contactinfocard.css";
import { NavLink } from "react-router-dom";
const ContactInfoCard = (props) => {
    return(
        <div className="contact-details-card">
            <div className="icon">
                <img src={props.iconUrl} alt={props.text} />
            </div>                
            <NavLink to={props.a}>{props.text}</NavLink>
        </div>
    )
}
export default ContactInfoCard