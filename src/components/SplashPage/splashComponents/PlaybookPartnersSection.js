import React from "react";

import avatar1 from "../../../images/avatars/avatar-1.jpg";
import avatar2 from "../../../images/avatars/avatar-2.jpg";
import FarmhouseThaiLogo from "../../../images/FarmhouseThaiLogo.gif";
import LesGourmandLogo from "../../../images/LesGourmandLogo.jpg";
import GoFreshLogo from "../../../images/GoFreshLogo.png";
import BobabiaLogo from "../../../images/BobabiaLogo.png";
import NanaJoesLogo from "../../../images/NanaJoesLogo.png";

const PlaybookPartnersSection = () => {
  return (
    <section id="testimonials">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>Partners</h5>
          <h1>Who You'll Learn From</h1>
        </div>
      </div>
      <div className="row flex-container">
        <div id="testimonial-slider" className="flexslider">
          <ul className="slides">
            <li>
              <div className="testimonial-author">
                <div className="author-image-container">
                  <img src={BobabiaLogo} alt="Author image" />
                </div>
                <div className="author-info">
                  Bobabia
                  <span>San Mateo, CA</span>
                  {""}
                  <span className="position">Victor Win, Owner</span>
                </div>
              </div>
            </li>
            <li>
              <div className="testimonial-author">
                <div className="author-image-container">
                  <img src={GoFreshLogo} alt="Author image" />
                </div>
                <div className="author-info">
                  GoFresh
                  <span>Modesto, CA - Turlock, CA - Pleasanton, CA</span>
                  {""}
                  <span>Billy Anderson, Founder and CEO</span>
                </div>
              </div>
            </li>
            <li>
              <div className="author-container">
                <div className="testimonial-author">
                  <div className="author-image-container">
                    <img src={FarmhouseThaiLogo} alt="Author image" />
                  </div>
                  <div className="author-info">
                    Farmhouse Thai
                    <span>San Francisco, CA - Oakland, CA - Portland, OR</span>
                    {""}
                    <span>Kasem Saengsawang, Founder, Owner and Head Chef</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="testimonial-author">
                <div className="author-image-container">
                  <img src={LesGourmandLogo} alt="Author image" />
                </div>
                <div className="author-info">
                  Les Gourmand
                  <span>San Francisco, CA</span>
                  {""}
                  <span>Sylvain Chaillout, Founder and Owner</span>
                </div>
              </div>
            </li>
            <li>
              <div className="testimonial-author">
                <div className="author-image-container">
                  <img src={NanaJoesLogo} alt="Author image" />
                </div>
                <div className="author-info">
                  Nana Joes
                  <span>San Francisco, CA</span>
                  {""}
                  <span>Michelle Pusateri, Founder and Owner</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlaybookPartnersSection;
