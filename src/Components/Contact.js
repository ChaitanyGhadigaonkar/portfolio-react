import React from "react";
import mailImg from './images/mail-64.png'
import pinImg from './images/pin-8-64.png'

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className="contact-header width-60 m-auto">
          <div className="line"></div>
          <h1>Contact Me</h1>
          <div className="line"></div>
        </div>
        <div className="contact-form  ">
          <div className="contact-left">
            <div className="contact-items">
              <div className="item">
                <div className="item-logo">
                  <img src={mailImg} alt="" srcset="" />
                </div>
                <h1>chaitanyghadigaonkar28@gmail.com</h1>
              </div>
              <div className="item" id="item-2">
                <div className="item-logo ">
                  <img src={pinImg} alt="" srcset="" />
                </div>
                <h1>Dahisar, Mumbai.</h1>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h1>Contact Me</h1>
            <form action="/send" method="post">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message "
                required
              ></textarea>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
