import React from 'react';
import "./workcard.css";
import Workcard from './workcard';
import WorkcardText from './workcardtext';
import workcarddata from './workcarddata';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className="project-container">
                {workcarddata.map((val, ind) => {
                    return (
                        <div className='project'>
                            <div className='left'>
                                <Workcard
                                    key={ind}
                                    images={val.images}
                                    title={val.title}
                                />
                            </div>
                            <div className='right'>
                                
                                <WorkcardText
                                    key={ind}
                                    text={val.text}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default Work;