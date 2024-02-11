// import React from 'react'

import { Project } from "../constants";

const Projects = () => {
  return (
    <div>
      <h2 className="proHeader">Projects</h2>
      <div className="proContainer">
        {Project.map((project, index) => (
          <div key={project.id} className="proContent group">
            <div className="proIndexLine">
              <div className="proIndex">{index + 1}</div>
              <div className="proLine"></div>
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="my-[6px]">{project.details}</p>
              <div className="proToolsContainer">
                {project.tools.map((tool, index) => (
                  <div className="proTool" key={index}>
                    {tool}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="proLink"
              >
                Link{" "}
                <span className="mx-1 duration-150 proLinkMarginHover">
                  &raquo;
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
