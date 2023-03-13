import React from "react";

import java from "./images/java.png";
import reactImg from "./images/react.png";
import html from "./images/html5.png";
import css from "./images/css3.png";
import javascript from "./images/javascript.png";
import mongoDB from "./images/mongodb.png";
import node from "./images/nodejs.png";
import tailwind from "./images/tailwind.svg";
import express from "./images/express.svg";
// import photo from './images/myImage.png';

import SkillBox from "./SkillBox";
export default function Middle() {
  return (
    <>
      <section id="middle">
        <div className="intro">
          <div className="intro-head">
            <h1>
              I'm <strong>Chaitany Ghadigaonkar</strong>
            </h1>
            <h2>Web Developer</h2>
          </div>
          <button className="contact-me">Download CV</button>
        </div>
        <div className="my-photo"></div>
      </section>
      <div className="About">
        <div className="about-container width-60 margin-auto">
          <h1>About</h1>
          <div className="ab-h1-para">
            <div className="ab-line"></div>
            <div className="about-para">
              <p>
                Hey there, I am Chaitany Ghadigaonakar - A passionated web
                developer. Always looking for the opportunity to improve myself
                and my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="my-skills width-80 margin-auto">
          <h1>My Skills</h1>

          <div className="skill-box width-60 margin-auto">
            <SkillBox imgSrc={java} h2="Java" />
            <SkillBox imgSrc={reactImg} h2="React Js" />
            <SkillBox imgSrc={mongoDB} h2="Mongo DB" />
            <SkillBox imgSrc={tailwind} h2="Tailwind CSS" />
          </div>
          <div className="skill-box width-60 margin-auto">
            <SkillBox imgSrc={express} h2="Express Js" />
            <SkillBox imgSrc={node} h2="Node Js" />
            <SkillBox imgSrc={javascript} h2="JavaScript" />
          </div>
          <div className="skill-box width-60 margin-auto">
            <SkillBox imgSrc={css} h2="CSS 3" />
            <SkillBox imgSrc={html} h2="HTML 5" />
          </div>
        </div>
      </div>
    </>
  );
}
