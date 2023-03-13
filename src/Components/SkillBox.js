import React from 'react'

export default function SkillBox(props) {
    const {imgSrc, h2}= props;
    return (
        <>
            <div className="skill">
              <div className="skill-logo">
                <img src={imgSrc} alt="" srcset="" />
              </div>
              <div className="skill-name">
                <h2>{h2}</h2>
              </div>
            </div>
        </>
    )
}
