import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: !props.blurButton ? "lightpink" : "" }}
      type={props.type}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
