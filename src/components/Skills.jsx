// import React from 'react'

import { Skill } from "../constants";

const Skills = () => {
  return (
    <div>
      <h2 className="skillsHeader">Skills</h2>
      <div className="skillContainer">
        {Skill.map((skill, index) => (
          <div key={skill.id}>
            <div className="skillContent">{skill.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
