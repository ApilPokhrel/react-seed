import React, { Component } from "react";

const Button = ({ name, label, type, id, value, handleChange, style }) => {
  let s = {
    backgroundColor: "#fa4251",
    color: "white",
    padding: "16px 20px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    marginBottom: "10px",
    opacity: "0.8"
  };

  if (style) s = Object.assign(s, style);
  const [state, setState] = React.useState({});
  const onMouseEnter = () => {
    setState({ ...state, ["opacity"]: "1" });
  };
  const onMouseLeave = () => {
    setState({ ...state, ["opacity"]: "0.8" });
  };

  return (
    <button
      style={s}
      type={type}
      name={name}
      className="btn"
      onClick={handleChange}
      value={value}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
    >
      {label}
    </button>
  );
};
export default Button;
