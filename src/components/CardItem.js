import React from "react";
//Link is for different pages the router renders the routes
// import { Link } from "react-router-dom";

//The <figure> tag specifies self-contained content, like illustrations, diagrams, photos
function CardItem(props) {
  return (
    <>
      <div className="card__item">
        {/* <div className="cards__item__link" to={props.path}> */}
        <div className="cards__item__info">
          <img src={props.src} className="cards__item__img illustration1"></img>

          <div className="cards__item__text">
            <h2 className="card__item__heading">{props.heading1}</h2>
            <p>{props.text1}</p>
          </div>

          <div className="cards__item__text">
            <h2 className="card__item__heading">{props.heading2}</h2>
            <p>{props.text2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
