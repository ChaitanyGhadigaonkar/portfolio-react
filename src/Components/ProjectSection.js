import React from "react";
// import Project from './Project'
import ProjectItem from "./ProjectItem";
import ResturantImg from "./images/Restorant.gif";
import flipkart from "./images/flipkart.png";
import rps from "./images/r-p-s.png";
import cce from "./images/cce.png";

export default function ProjectSection() {
  return (
    <>
      <div className="project-section">
        <div className="project-con width-80 margin-auto">
          <h1>My Projects</h1>
          <div className="project-items">
            <ProjectItem href="https://github.com/ChaitanyGhadigaonkar/Collaborative-Code-Editor" activeImg={cce} h1="Collaborative Code Editor" descPara="Collaborative Code Editor - a realtime collaborative editor" />

            <ProjectItem href="https://chaitanyghadigaonkar.github.io/Rock-Paper-Scissors/" activeImg={rps} h1="Rock Paper Scissor" descPara="I have created rock-paper-scissor game using react js having good interface." />
          </div>
          <div className="project-items">
            <ProjectItem href="https://chaitanyghadigaonkar.github.io/Frontend-Flipkart-Clone/" activeImg={flipkart} h1="FrontEnd Flipkart Clone" descPara="I have created the FrontEnd of flipkart using HTML CSS and JavaScript." />

            <ProjectItem href="https://chaitanyghadigaonkar.github.io/Foot-Restaurant-Website/" activeImg={ResturantImg} h1="Landing Page - Food Restorant" descPara="I have created the Landing page for Restorant using HTML CSS and JavaScript." />
          </div>

          <div className="more-projects width-80  margin-auto">
            <button className="m-p-btn">
              <a href="/more-projects">See More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
