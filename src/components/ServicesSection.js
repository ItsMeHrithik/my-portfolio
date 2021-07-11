import React from "react";
import HomeImage from "../img/home-banner-2.jpg";

//imports icons
import ClockIcon from "../img/clock.svg";
import DiaphragmIcon from "../img/diaphragm.svg";
import MoneyIcon from "../img/money.svg";
import TeamWorkIcon from "../img/teamwork.svg";

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Hight <span>quality</span> Services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={ClockIcon} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum clock and blah</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={MoneyIcon} alt="money icon" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum clock and blah</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={DiaphragmIcon} alt="health icon" />
              <h3>Health</h3>
            </div>
            <p>Lorem ipsum clock and blah</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={TeamWorkIcon} alt="teamwork icon" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum clock and blah</p>
          </div>
        </div>
      </div>
      <div className="ing">
        <img src={HomeImage} alt="buisness" />
      </div>
    </div>
  );
};

export default ServiceSection;
