import React from "react";
export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="contact-header">
          <div className="line"></div>
          <div className="footer-img">
            <a rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=chaitanyghadigaonkar28@gmail.com&su=SUBJECT&body=BODY&bcc=&tf=cm" target="_blank">
              <i className="fa-brands fa-3x fa-google"></i>
            </a>
            <a rel="noreferrer" href="https://twitter.com/chaitany28" target="_blank">
              <i className="fa-brands fa-3x  fa-twitter"></i>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/chaitany-ghadigaonkar" target="_blank">
              <i className="fa-brands fa-3x fa-linkedin-in"></i>
            </a>
            <a rel="noreferrer" href="https://github.com/ChaitanyGhadigaonkar" target="_blank">
              <i className="fa-brands fa-3x fa-github"></i>
            </a>
          </div>
          <div className="line"></div>
        </div>
        <footer>
          <p>Built with ❤️ by Chaitany Ghadigaonkar</p>
        </footer>
      </div>
    </>
  );
}
