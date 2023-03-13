import React, { useState } from "react";
import search_ico from "./images/search_ico.png";

export default function Navbar() {

  const [active,setActive] = useState(false);
  const handleHamburgerMenu=()=>{
    console.log("Clicked")
      setActive(prev=>!prev);
  }
  return (
    <>
      <nav className="width-60 margin-auto" id="nav">
        <div className="logo" id="logo">
          <h3>
            <a rel="noreferrer" href="/">ChaitanyGhadigaonkar</a>
          </h3>
        </div>
        <div className={`navigation-list ${active?"active":""}`}>
          <div className={`navigation`}>
            <li>
              <a rel="noreferrer" href="/" id="about">
                About
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="/" id="projects">
                My Projects
              </a>
            </li>
          </div>
          <div className="search">
            <input type="search" name="" id="search-inp" placeholder="Search" />
            <button id="btn">
              <img src={search_ico} alt="" srcset="" />
            </button>
          </div>
        </div>
        <div className={`hamburger ${active?"active":""}`} onClick={handleHamburgerMenu} >
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
      </nav>
    </>
  );
}
