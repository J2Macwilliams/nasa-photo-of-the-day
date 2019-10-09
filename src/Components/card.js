import React from "react";

const Card = props => {
  return (
    <div className="imgCard" >
        <h2>Image title: {props.title}</h2>
        <img src={props.url} alt="Nasa Photo of the Day"/>
        <p>{props.description}</p>
        <p>Date: {props.date}</p>
    </div>
  );
};
export default Card;
