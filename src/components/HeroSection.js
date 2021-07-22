import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Bg from "../../src/images/bg-pattern-intro.svg";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="background">
        <img src={Bg}></img>
      </div>
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted></video> */}

      <div className="hero-wrapper">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="hero-btns">
          <Button
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Start for Free
          </Button>
          <Button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
