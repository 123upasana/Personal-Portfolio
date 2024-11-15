import './skill.css'
import React from 'react';
import Skillcart from './skillcart.js';
import { useState } from 'react';
import { SKILLS } from "../assert/data.js"
import SkillInfo from './skillinfo/skillinfo.jsx';
const Skill = () => {

    const [selectedSkill,setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) =>{
        setSelectedSkill(data);
    }
    return (
    <div className='skill-container'>
        <h5>Technical Proficiency</h5>
        <div className='skill-content'>
            <div className='skills'>
              {SKILLS.map((item)=>(
                <Skillcart 
                key={item.title} 
                iconUrl={item.image}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={()=>{
                    handleSelectedSkill(item)
                }}
                 />
                ))}
            </div>
            <div className='skills-info'>
                <SkillInfo heading={selectedSkill.title}
                skills={selectedSkill.skills} />
            </div>
        </div>
    </div>
    );
};
export default Skill;