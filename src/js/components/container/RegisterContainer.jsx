import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      dob: date
    });
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

  submit(event) {
    event.preventDefault();
    const { name, email, phone, dob, role, country, gender, password, city } = this.state;
    for (var s of this.state) {
    }
  }

  render() {
    const {
      name,
      email,
      phone,
      dob,
      role,
      country,
      gender,
      password,
      showPassword,
      city
    } = this.state;

    return (
      <div style={style} className="container">
        <form
          role="form"
          id="register-form"
          onSubmit={this.submit}
          className="col-md-4"
          method="post"
        >
          <FormControl className="form-control">
            <TextField
              id="name"
              name="name"
              errortext="Name is Required"
              label="Name"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
          </FormControl>
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
            <TextField
              name="phone"
              id="phone"
              label="Phone"
              value={phone}
              onChange={this.handleChange}
              margin="normal"
            />
          </FormControl>

          <FormControl className="form-control">
            <InputLabel htmlFor="role">Role</InputLabel>
            <Select
              value={role}
              onChange={this.handleChange}
              inputProps={{
                name: "role",
                id: "role"
              }}
            >
              <MenuItem value={10}>Traveler</MenuItem>
              <MenuItem value={20}>Guider</MenuItem>
              <MenuItem value={30}>TravelAgency</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="form-control">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                name="dob"
                id="dob"
                label="Date Of Birth"
                format="MM/dd/yyyy"
                value={dob}
                inputProps={{
                  name: "dob",
                  id: "dob"
                }}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <br />
          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              className="group"
              value={gender}
              onChange={this.handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <FormControl className="form-control">
            <InputLabel htmlFor="country">Country</InputLabel>
            <Select
              value={country}
              onChange={this.handleChange}
              inputProps={{
                name: "country",
                id: "country"
              }}
            >
              <MenuItem value={10}>Nepal</MenuItem>
              <MenuItem value={20}>India</MenuItem>
              <MenuItem value={30}>Korea</MenuItem>
              <MenuItem value={40}>Thailand</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="form-control">
            <TextField
              id="city"
              name="city"
              label="City"
              value={city}
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

export default RegisterContainer;
