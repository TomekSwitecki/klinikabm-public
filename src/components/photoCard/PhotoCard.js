import { Divider } from "../divider/Divider";
import React from "react";
export const PhotoCard = (props) => {
  return (
    <div className="photo-card">
      <img src={props.photo} alt="repair photo" />
      <Divider />
      <div className="photo-card__wrapper">
        <span className="photo-card__text">{props.text}</span>
        <div className="photo-card__icon">{props.icon}</div>
      </div>
    </div>
  );
};
