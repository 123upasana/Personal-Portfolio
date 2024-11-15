import React from 'react';
import "./workcard.css";
import { NavLink } from 'react-router-dom';
const WorkcardText = (props) => {
    return (
        <div className='project-card'>
            <h1>Key Points</h1>
            <p>{props.text}</p>
            <div className='pro-btns'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>
    );
};
export default WorkcardText;
