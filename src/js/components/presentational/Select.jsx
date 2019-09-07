import React, { Component } from "react";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100%",
      padding: "15px",
      margin: "5px 0 22px 0",
      border: "none",
      background: "#f1f1f1",
      outline: "none"
    };
  }
  onFocus() {
    this.setState({ background: "#ddd" });
  }

  onBlur() {
    this.setState({ background: "#f1f1f1" });
  }

  render() {
    let { label, multiple, name, id, handleChange } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={name}>{label}</label>
        <select
          style={{
            width: this.state.width,
            padding: this.state.padding,
            margin: this.state.margin,
            border: this.state.border,
            background: this.state.background,
            outline: this.state.outline
          }}
          name={name}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          id={id}
          multiple={multiple}
          onChange={handleChange}
        >
          {this.props.children}
        </select>
      </React.Fragment>
    );
  }
}

export default Select;
