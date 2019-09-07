import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <style
          dangerouslySetInnerHTML={{
            __html: `.form-container {
  max-width: ${this.props.width};
  padding: 10px;
  background-color: white;
}
`
          }}
        ></style>
        <form
          method={this.props.method}
          onSubmit={this.props.handleSubmit}
          className="form-container"
        >
          <h1>{this.props.title || ""}</h1>
          {this.props.children}
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
