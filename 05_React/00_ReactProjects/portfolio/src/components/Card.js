import React from "react";
import "./Card.css";

const Card = ({  heading, detail }) => {
  return (
    <div className="card">
      <img src="heartemoji.png" alt="Card Emoji" className="card-emoji" />
      <h2 className="card-heading">{heading}</h2>
      <p className="card-detail">{detail}</p>
      <button className="card-button">Learn More</button>
    </div>
  );
};

export default Card;
