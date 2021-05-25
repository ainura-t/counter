import React from "react";

const Button = (props) => {
  return <button onClick={props.funcKey}>{props.btnName}</button>;
};
export default Button;
