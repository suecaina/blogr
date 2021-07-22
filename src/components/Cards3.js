import React from "react";
import Cards3Item from "./Cards3Item";
import "./Cards3.css";
import Illustration3 from "../images/illustration-laptop-desktop.svg";

function Cards3() {
  return (
    <div className="cards3">
      <div className="cards3__container">
        <div className="cards3__wrapper">
          <div className="cards3__items">
            <Cards3Item src={Illustration3} className="cards3__item__img" />

            <Cards3Item
              heading1="Free, open, simple"
              text1="Blogr is a free and open source application backed
              by large community of helpful developers. It supports features such as code
              syntax highlighting. RSS feeds, social media integration, third-party
              commenting tools, and works seamlessly with Google Analytics. The architecture is 
              clean and it relatively easy to learn."
              heading2="Powerful tooling"
              text2="Batteries included. We built a simple and straightforward
              CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards3;
