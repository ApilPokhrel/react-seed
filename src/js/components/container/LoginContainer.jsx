import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false
    };
    this.handleChange = this.handleChange.bind(this);
    (this.handleClickShowPassword = this.handleClickShowPassword.bind(this)),
      (this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this));
  }

  handleClickShowPassword() {
    this.setState({
      password: this.state.password,
      showPassword: !this.state.showPassword
    });
  }

  handleMouseDownPassword(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { email, password, showPassword } = this.state;
    return (
      <div className="container">
        <form
          role="form"
          id="register-form"
          onSubmit={this.submit}
          className="col-md-4"
          method="post"
        >
          <FormControl className="form-control">
            <TextField
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={this.handleChange}
              margin="normal"
            />
          </FormControl>

          <FormControl className="form-control">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={this.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <hr />
          <FormControl className="form-control">
            <Button variant="outlined" color="secondary" type="submit" className="button">
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
