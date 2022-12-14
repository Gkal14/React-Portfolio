import React from "react";
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
          <a href=".../assets/George-resume.pdf">
            Resume
          </a>
        
          
        
          
        </nav>
       
      </div>
    </header>
  );
}