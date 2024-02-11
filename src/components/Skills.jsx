// import React from 'react'

import { Skill } from "../constants";

const Skills = () => {
  return (
    <div>
      <h2 className="skillsHeader">Skills</h2>
      <div className="skillsContainer">
        {Skill.map((skill) => (
          <div key={skill.id}>
            <div className="skillsContent">{skill.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
