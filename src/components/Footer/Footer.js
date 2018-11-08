import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-content_left">
            <div className="footer-logo" />
          </div>
          <div className="footer-content_right">
            <span className="social-link">
              <a
                target="_blank"
                href="https://www.facebook.com/Zonily-287783848656914/"
              >
                <i className="fab fa-facebook-square fa-2x" />
              </a>
            </span>
            <span className="social-link">
              <a target="_blank" href="https://www.instagram.com/zonilyinc/">
                <i className="fab fa-instagram fa-2x" />
              </a>
            </span>
            <span className="social-link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/zonily-inc/"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </span>
            <span className="social-link">
              <a
                target="_blank"
                href="https://www.meetup.com/Bay-Area-Food-Beverage-Entrepreneurs"
              >
                <i className="fab fa-meetup fa-2x" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright Zonily Inc. 2018.</span>
            </div>
            <div className="pp-toc">
              <span>
                <a id="pp-link" href="/privacy" target="_blank">
                  Privacy Policy
                </a>
              </span>
              <span>
                <a id="toc-link" href="/privacy" target="_blank">
                  Terms of Service
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
