import React from "react";
import HomeImage from "../img/home-banner.jpg";

const AboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span> dreams</span> come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
        <p>
          Contact us for making you e-commerce businees grow to the next level
          with all support
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={HomeImage} alt="Webdevloper" />
      </div>
    </div>
  );
};
export default AboutSection;
