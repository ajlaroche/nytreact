import React from "react";
// import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="card-header">
      <h3 style={{textAlign:"center"}}>{props.header}</h3>
    </div>
    {props.children}
  </div>
);

export default Card;
