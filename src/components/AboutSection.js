import React from "react";
import HomeImage from "../img/home-banner.jpeg";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span> dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for making you e-commerce businees grow to the next level
            with all support
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={HomeImage} alt="Webdevloper" />
      </Image>
    </About>
  );
};

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow : hidden;
  img {
    width: 120%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
overflow : hidden;
`;

export default AboutSection;
