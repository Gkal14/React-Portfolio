import React from "react";
import { Container } from "react-bootstrap";
import MyPicture from "../assets/me.jpeg"
import './css/About.css';

export default function About() {
  return (
    <section id="about">
      <div className="flex">
        <div class="greet-w">
          <h1 className="greeting">
            Hi, i'm George <br/>
            <br/>A Web Developer with a passion for creating user focused applications with an emphasis on design quality.
          </h1>
          <div className="row">
          <p className="description">
I am a full stack web-developer who is passionate about creating high quality web applications. 
Having recently completed studying a bootcamp course through the University of Adelaide, I am eager 
to utilise and build on the skills that I have gained throughout my time studying.
Through my studies I have built several applications requiring an understanding of HTML, CSS, JavaScript, Bootstrap, Tailwind,
Nodejs, Reactjs and several other technologies. 
Happiest when busy and really enjoying the challanges of learning how to code.
Moving forward I will continue to create things that excite me and I hope to share them with the world.
<div className="buttons"> 
<br></br>
            <a href="#contact">
             Contact Me
            </a>
            <a href="#projects">
              See My Projects
            </a>
          </div>

          </p>
          <img className="img"
            alt="MyPicture"
            src={MyPicture}
          />
        </div>
            <Container className="tech">
              <h2>Technologies</h2>
              <p>Below is a list of technologies that I have gained proficiency in since I started my coding journey</p>
              <ul>HTML</ul>
              <ul>CSS</ul>
              <ul>Bootstrap</ul>
              <ul>Tailwind</ul>
              <ul>JavaScript</ul>
              <ul>JQuery</ul>
              <ul>Nodejs</ul>
              <ul>Express</ul>
              <ul>MySQL</ul>
              <ul>React</ul>
            </Container>
        </div>
      </div>
    </section>
  );
}