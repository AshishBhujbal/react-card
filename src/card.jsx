import React from "react";
export function Card(props) {
  return (
    <div className="container">
      <h4 className="name">{props.name}</h4>
      <img className="photo" src={props.photo} alternative="{props.alt}" />
      <p className="description-text">{props.description}.</p>
      <p className="description">{props.mobile}</p>
    </div>
  );
}
