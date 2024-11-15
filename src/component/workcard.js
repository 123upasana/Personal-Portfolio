import React from 'react';
import "./workcard.css";
// import { NavLink } from 'react-router-dom';
const Workcard = (props) => {
    return (
        <div className='project-card'>
            <div className='card1'>
                <img src={props.images}/>
                <h2 className='project-title'>{props.title}</h2>
            </div>
        </div>
    );
};
export default Workcard;