import React from "react";

function Cards3Item(props) {
  return (
    <>
      <div className="cards3__item">
        <div className="cards3__item__info">
          <img src={props.src} className="cards3__item__img"></img>

          <div className="cards3__item__text">
            <h2 className="card3__item__heading">{props.heading1}</h2>
            <p>{props.text1}</p>
            <h2 className="card3__item__heading">{props.heading2}</h2>
            <p>{props.text2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards3Item;
