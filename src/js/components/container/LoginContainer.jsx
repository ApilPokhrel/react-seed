import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import Form from "../presentational/Form.jsx";
import Button from "../presentational/Button.jsx";
import Api from "../../common/ApiService";
import Routes from "../../common/Routes";
import { Link } from "react-router-dom";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let {
      data: { accessToken, refreshToken }
    } = await Api.init(Routes.user.post.login(), this.state);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">{this.props.title || ""}</h5>

                <Form method="POST" handleSubmit={this.handleSubmit} title="Sign In">
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
                      New ! Register Here...
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

export default LoginContainer;
