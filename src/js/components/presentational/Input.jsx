import React from "react";
import PropTypes from "prop-types";
const Input = ({ name, label, type, id, value, placeholder, handleChange }) => {
  const [state, setState] = React.useState({
    width: "100%",
    padding: "15px",
    margin: "5px 0 22px 0",
    border: "none",
    background: "#f1f1f1",
    outline: "none"
  });

  const onFocus = () => {
    setState({ ...state, ["background"]: "#ddd" });
  };

  const onBlur = () => {
    setState({ ...state, ["background"]: "#f1f1f1" });
  };
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        style={{
          width: state.width,
          padding: state.padding,
          margin: state.margin,
          border: state.border,
          background: state.background,
          outline: state.outline
        }}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder || ""}
        onChange={handleChange}
        required
      />
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;
