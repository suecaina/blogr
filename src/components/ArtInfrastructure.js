import React from "react";
import "./ArtInfrastructure.css";
import blueCircle from "../images/bg-pattern-circles.svg";
import Mobiles from "../images/illustration-phones.svg";
// import Illustration1 from "../images/illustration-editor-desktop.svg";

function ArtInfrastructure() {
  return (
    <div className="arts">
      <div className="arts__wrapper">
        <div className="arts__items">
          <div className="art__item">
            <img className="mobiles" src={Mobiles}></img>
            <div className="hidden">
              <img className="blueCircle" src={blueCircle}></img>
            </div>
          </div>

          <div className="art__item">
            <div className="art__item__text">
              <h2>State of the Art Infrastructure</h2>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, nomatter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtInfrastructure;
