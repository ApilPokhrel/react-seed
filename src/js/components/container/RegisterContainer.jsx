import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import Form from "../presentational/Form.jsx";
import Button from "../presentational/Button.jsx";
import Api from "../../common/ApiService";
import Routes from "../../common/Routes";
import { Link } from "react-router-dom";

let style = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px"
};

class RegisterContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      country: "",
      role: "",
      gender: "",
      city: "",
      dob: new Date(),
      showPassword: false,
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      dob: date
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let {
      data: { accessToken, refreshToken }
    } = await Api.init(Routes.user.post.register(), this.state);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
  }

  render() {
    const { name, email, phone, dob, role, country, gender, password, city } = this.state;

    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">{this.props.title || ""}</h5>
                <Form method="POST" handleSubmit={this.handleSubmit}>
                  <Input
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Name..."
                    name="name"
                    value={name}
                    handleChange={this.handleChange}
                  />
                  <Input
                    id="email"
                    label="Email"
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={email}
                    handleChange={this.handleChange}
                  />

                  <Input
                    id="phone"
                    label="Phone"
                    type="text"
                    placeholder="Phone..."
                    name="phone"
                    value={phone}
                    handleChange={this.handleChange}
                  />

                  <Input
                    id="dob"
                    label="Date Of Birth"
                    type="date"
                    placeholder="Date Of Birth.."
                    name="dob"
                    value={dob}
                    handleChange={this.handleChange}
                  />

                  <Input
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                  />

                  <hr />
                  <Button label="Submit" type="submit" />
                  <div className="text-center">
                    <Link className="small" to="/register">
                      Forgot password?
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterContainer;
