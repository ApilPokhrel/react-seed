import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DataTable from "../DataTable.jsx";
import Modal from "../Modal.jsx";
import Input from "../Input.jsx";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

let create = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    name: "",
    email: "",
    psw: "",
    desc: "",
    resource: "",
    action: "",
    key: ["sn", "name", "action", "resource", "fnc"],
    head: ["S.N", "Name", "Action", "Resource", "Fnc"],
    body: [
      {
        sn: 1,
        name: "Apil",
        resource: "/api/v1/launch",
        action: "get",
        fnc: () => {
          return (
            <React.Fragment>
              <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
                Delete
              </button>
            </React.Fragment>
          );
        }
      }
    ],
    modal: false,
    modalBody: () => {
      return (
        <React.Fragment>
          <form method="POST" className="form-container">
            <style
              dangerouslySetInnerHTML={{
                __html: `.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}



.form-container .btn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;
}

.form-container .cancel {
  background-color: red;
}

.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}`
              }}
            ></style>
            <h1>Login</h1>

            <Input
              type="email"
              label="Email"
              placeholder="Enter Email"
              name="email"
              value={state.email}
              id="name"
              handleChange={handleChange("email")}
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              value={state.psw}
              handleChange={handleChange("psw")}
            />

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </React.Fragment>
      );
    }
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const openModal = () => {
    if (state.modal) {
      setState({ ...state, ["modal"]: false });
    } else {
      setState({ ...state, ["modal"]: true });
    }
  };

  return (
    <div className="container">
      <form className="col-md-4" autoComplete="off">
        <Input
          id="p-name"
          label="Name"
          name="name"
          placeholder="Permission Name"
          value={state.name}
          handleChange={() => handleChange("name")}
        />

        <Input
          required
          id="p-resource"
          label="Resource"
          placeholder="Resource"
          name="resource"
          value={state.resource}
          onChange={() => handleChange("resource")}
        />

        <Input
          required
          id="p-desc"
          label="Description"
          placeholder="Description"
          name="desc"
          value={state.desc}
          onChange={() => handleChange("desc")}
        />

        <FormControl className="form-control">
          <InputLabel htmlFor="action">Action</InputLabel>
          <Select
            required
            value={state.action}
            onChange={handleChange("action")}
            inputProps={{
              name: "action",
              id: "action"
            }}
          >
            <MenuItem value={10}>GET</MenuItem>
            <MenuItem value={20}>POST</MenuItem>
            <MenuItem value={30}>PATCH</MenuItem>
            <MenuItem value={40}>DELETE</MenuItem>
            <MenuItem value={40}>PUT</MenuItem>
          </Select>
        </FormControl>

        <hr />
        <FormControl className="form-control">
          <Button variant="outlined" color="secondary" type="submit" className="button">
            Submit
          </Button>
        </FormControl>
      </form>
      <br />
      <br />
      <DataTable head={state.head} body={state.body} index={state.key} />
      <br />
      <Modal open={state.modal} modalType="small" body={state.modalBody()} />
    </div>
  );
};

export default create;
