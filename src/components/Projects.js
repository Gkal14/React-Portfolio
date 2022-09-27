import React from "react";
import { projects } from "../Project";
import "./css/Projects.css"


export default function Projects() {
  return (
    <section id="projects">
      <div className="">
          <h1 className="heading">
            My Projects
          </h1>
          <p className="sub-head">
            Here are a few of the projects i have completed. <br></br>
            If you want to view the code for any of my projects, follow this link to my 
            <a href = "https://github.com/Gkal14"> GitHub</a>
          </p>
        </div>
        <div>
          {projects.map((projects) => (
            <a
              href={projects.link}
              key={projects.image}
              >
              <div className="container-p">
                <img
                  alt="gallery"
                  className="image"
                  src={projects.image}
                />
                <div className="overlay">
                  <div className="text">
                  <h1>
                    {projects.title}
                  </h1>
                  <h2>
                    {projects.subtitle}
                  </h2>
                  <p>{projects.description}</p>
                </div>
              </div>
              </div>
            </a>
          ))}
        </div>
    </section>
  );
}