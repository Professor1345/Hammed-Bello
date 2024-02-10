// import React from 'react'

import { workExperience } from "../constants";

const Experience = () => {
  return (
    <div>
      <h2 className="experienceHeader">Experience</h2>

      <div className="experienceContainer">
        {workExperience.map((expr, index) => (
          <div key={index} className="expContent">
            <div className="expConHeader">
              <span className="text-lg mr-1">{expr.role.toUpperCase()}</span>{" "}
              <span>({expr.employStatus})</span>
            </div>
            <div className="compDuration">
               <span className="font-bold mr-1">@ {expr.company}</span>{" "}
              <span className="font-semibold">[{expr.period}]</span>
            </div>
            {/* Details */}
            <div className="my-1 text-sm 2xs:text-base">
              {expr.details.map((detail, index) => (
                <ul key={index} className="list-disc pl-5 my-1">
                  <li>{detail}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
