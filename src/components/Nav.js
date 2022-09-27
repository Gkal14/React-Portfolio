import React from "react";
import resume from "./resume/George-resume.pdf"
import "./css/Nav.css"

export default function Navbar() {
  return (
    <header className="Navbar">
      <div className="container-nav">

          <a href="#about" className="spacing">
           <h2>George Kaluwin</h2>
          </a>
      
        <nav className="options">
          <a href="#about" className="spacing">
            About me
          </a>
          <a href="#projects" className="spacing">
            My projects
          </a>
           <a href="#contact">
            Contact me
          </a>
          <a href={resume}>
            Resume
          </a>
        
          
        
          
        </nav>
       
      </div>
    </header>
  );
}