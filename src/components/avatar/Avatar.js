import React from "react";
export const Type = {
  Primary: "primary",
  Red: "red",
  Black: "black",
  LightBlue: "light-blue",
};

const Avatar = (props) => {
  const { type, icon } = props;
  const avatarClass = `avatar avatar__icon_wrapper avatar__icon_wrapper--${type}`;
  return (
    <div className={avatarClass}>
      <div className="avatar__icon">{icon}</div>
    </div>
  );
};

export default Avatar;
