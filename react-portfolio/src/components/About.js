import React from "react";
import MyPicture from "../assets/me.jpeg"
import './css/About.css';

export default function About() {
  return (
    <section id="about">
      <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
<div className="content">
      <div className="flex">
        <div >
          <h1 className="greeting">
            Hi, i'm George 
            <br/>A Web Developer with a passion for creating human centred applications with an emphasis on design quality.
          </h1>
          <div className="row">
          <p className="description">
I am a full stack web-developer who is passionate about creating high quality web applications. 
Having recently completed studying a bootcamp course through the University of Adelaide, I am eager 
to utilise and build on the skills that I have gained throughout my time studying.
Through my studies I have built several applications requiring an understanding of HTML, CSS, JavaScript, Bootstrap, Tailwind,
Nodejs, Reactjs and several other technologies. 
Happiest when busy and really enjoying the challanges of learning how to code.
I look forward to continue creating things that excite me and hope to share them with the world.
<div className="buttons"> 
<br></br>
            <a href="#contact">
             Contact Me
            </a>
            <a href="#projects">
              See My Projects!
            </a>
          </div>

          </p>
          <img className="img"
            alt="MyPicture"
            src={MyPicture}
          />
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}