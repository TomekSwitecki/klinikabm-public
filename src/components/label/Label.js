import React from "react";
export function Label(props) {
  return (
    <div className="label">
      {props.icon}
      <p className="label__text">{props.text}</p>
    </div>
  );
}
