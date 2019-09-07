import React, { Component } from "react";

const Button = ({ name, label, type, id, value, handleChange }) => {
  const [state, setState] = React.useState({
    backgroundColor: "#fa4251",
    color: "white",
    padding: "16px 20px",
    border: "none",
    cursor: "pointer",
    width: " 100%",
    marginBottom: "10px",
    opacity: "0.8"
  });
  const onMouseEnter = () => {
    setState({ ...state, ["opacity"]: "1" });
  };
  const onMouseLeave = () => {
    setState({ ...state, ["opacity"]: "0.8" });
  };

  const { backgroundColor, color, padding, border, cursor, width, marginBottom, opacity } = state;

  return (
    <button
      style={{
        backgroundColor,
        color,
        padding,
        border,
        cursor,
        width,
        marginBottom,
        opacity
      }}
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
