import React from "react";
import Form from "../Form.jsx";
import Input from "../Input.jsx";
import Select from "../Select.jsx";
import Routes from "../../../common/Routes";
import Api from "../../../common/ApiService";
import Button from "../Button.jsx";

let edit = props => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const _id = params.get("user_id");

  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    _id,
    roles: [],
    gender: "",
    city: "",
    options: "",
    dob: new Date().toISOString().split("T")[0]
  });

  React.useEffect(() => {
    setUser();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    await Api.init(Routes.user.patch.edit(state._id), state);
    alert("User Edited");
  };

  let handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSelect = name => event => {
    event.preventDefault();
    var options = event.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setState({ ...state, [name]: value });
  };

  const generateOptions = async () => {
    let roles = await getRoles();
    return roles.map((e, i) => {
      return (
        <option key={i} value={e._id}>
          {e.name}
        </option>
      );
    });
  };

  const getRoles = async () => {
    let roles = await Api.init(Routes.role.get.search(), {});
    return roles.data;
  };

  const setUser = async () => {
    let {
      data: { name, contact, password, roles, dob }
    } = await Api.init(Routes.user.get.detail(state._id));
    let phone = contact[1] && contact[1].address ? contact[1].address : "";
    let opt = await generateOptions();
    let date = dob
      ? new Date(dob).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0];
    setState({
      ...state,
      ["name"]: `${name.first} ${name.last}`,
      ["email"]: contact[0].address,
      ["phone"]: phone,
      ["password"]: password,
      ["roles"]: roles,
      ["dob"]: date,
      ["options"]: opt
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">{`Edit User`}</h5>
              <Form method="POST" handleSubmit={handleSubmit}>
                <Input
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={state.name}
                  handleChange={handleChange("name")}
                />
                <Input
                  id="email"
                  label="Email"
                  type="text"
                  placeholder="Email..."
                  name="email"
                  value={state.email}
                  handleChange={handleChange("email")}
                />

                <Input
                  id="phone"
                  label="Phone"
                  type="text"
                  placeholder="Phone..."
                  name="phone"
                  value={state.phone}
                  handleChange={handleChange("phone")}
                />

                <Input
                  id="dob"
                  label="Date Of Birth"
                  type="date"
                  placeholder="Date Of Birth.."
                  name="dob"
                  value={state.dob}
                  handleChange={handleChange("dob")}
                />

                <Select
                  id="u-roles"
                  label="Roles"
                  multiple={true}
                  name="roles"
                  defaultValue={state.roles}
                  options={state.options}
                  value={state.roles}
                  handleChange={handleSelect("roles")}
                >
                  {state.options}
                </Select>
                <hr />
                <Button label="Submit" type="submit" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default edit;
