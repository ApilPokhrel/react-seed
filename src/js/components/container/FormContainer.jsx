import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputBox from "../presentational/Input.jsx";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <InputBox
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={() => {this.handleChange(e)}}
        />
      
      </form>
    );
  }
}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;