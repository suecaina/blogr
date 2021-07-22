import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Illustration1 from "../images/illustration-editor-desktop.svg";

function Cards() {
  return (
    <div className="cards">
      <h1>Designed for the future</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              heading1="Introducing an extensible editor"
              text1="Blogr features are exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
              Extensibility with plugins and themes provide easy way to add functionality or change the looks of a blog."
              heading2="Robust content management"
              text2="Flexible content management enables users to easily
              move through posts. Increase the usability of your blog by adding 
              customized categories, sections, format or flow. With this funtionality, you're
              in full control."
            />
            <CardItem src={Illustration1} className="illustration1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
