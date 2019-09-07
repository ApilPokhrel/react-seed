import React from "react";
import DataTable from "../DataTable.jsx";
import Modal from "../Modal.jsx";
import Input from "../Input.jsx";
import Form from "../Form.jsx";
import Button from "../Button.jsx";
import Select from "../Select.jsx";

let create = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    psw: "",
    desc: "",
    date: "",
    resource: "",
    action: "",
    key: ["status", "symbol", "phone", "dob"],
    head: ["Status", "Symbol", "Phone", "Date Of Birth"],
    body: [],
    sody: [
      // {
      //   sn: 1,
      //   name: "Apil",
      //   resource: "/api/v1/launch",
      //   action: "get",
      //   fnc: () => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
      //           Edit
      //         </button>
      //         <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
      //           Delete
      //         </button>
      //       </React.Fragment>
      //     );
      //   }
      // },
      // {
      //   sn: 2,
      //   name: "Apil2",
      //   resource: "/api/v1/launch",
      //   action: "get",
      //   fnc: () => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
      //           Edit
      //         </button>
      //         <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
      //           Delete
      //         </button>
      //       </React.Fragment>
      //     );
      //   }
      // },
      // {
      //   sn: 3,
      //   name: "Apil3",
      //   resource: "/api/v1/launch",
      //   action: "get",
      //   fnc: () => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
      //           Edit
      //         </button>
      //         <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
      //           Delete
      //         </button>
      //       </React.Fragment>
      //     );
      //   }
      // },
      // {
      //   sn: 4,
      //   name: "Apil4",
      //   resource: "/api/v1/launch",
      //   action: "get",
      //   fnc: () => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
      //           Edit
      //         </button>
      //         <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
      //           Delete
      //         </button>
      //       </React.Fragment>
      //     );
      //   }
      // },
      // {
      //   sn: 5,
      //   name: "Apil5",
      //   resource: "/api/v1/launch",
      //   action: "get",
      //   fnc: () => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
      //           Edit
      //         </button>
      //         <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
      //           Delete
      //         </button>
      //       </React.Fragment>
      //     );
      //   }
      // },
      // {
      //   sn: 6,
      //   name: "Apil6",
      //   resource: "/api/v1/launch",
      //   action: "get",
      //   fnc: () => {
      //     return (
      //       <React.Fragment>
      //         <button className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>
      //           Edit
      //         </button>
      //         <button className="btn btn-danger btn-sm" onClick={() => openModal()}>
      //           Delete
      //         </button>
      //       </React.Fragment>
      //     );
      //   }
      // }
    ],
    modal: false
  });

  const handleChange = name => event => {
    event.preventDefault();
    setState({ ...state, [name]: event.target.value });
  };

  const closeModal = () => {
    setState({ ...state, ["modal"]: false });
  };
  const openModal = () => {
    if (state.modal) {
      setState({ ...state, ["modal"]: false });
    } else {
      setState({ ...state, ["modal"]: true });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(state.name, state.email);
  };

  return (
    <div className="container">
      <Form method="POST" handleSubmit={handleSubmit} width="40%">
        <Input
          id="p-name"
          label="Name"
          name="name"
          type="text"
          placeholder="Permission Name"
          value={state.name}
          handleChange={handleChange("name")}
        />

        <Input
          id="p-resource"
          label="Resource"
          type="text"
          placeholder="Resource"
          name="resource"
          value={state.resource}
          handleChange={handleChange("resource")}
        />

        <Input
          id="p-desc"
          label="Description"
          type="text"
          placeholder="Description"
          name="desc"
          value={state.desc}
          handleChange={handleChange("desc")}
        />

        <Input
          id="p-date"
          label="Date"
          type="date"
          placeholder="Date"
          name="date"
          value={state.date}
          handleChange={handleChange("date")}
        />

        <Select
          id="p-action"
          label="Action"
          multiple={false}
          name="action"
          value={state.action}
          handleChange={handleChange("action")}
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELET</option>
          <option value="put">PUT</option>
        </Select>

        <hr />
        <Button label="Submit" type="submit" />
      </Form>
      <br />
      <br />
      <DataTable
        head={state.head}
        body={state.body}
        index={state.key}
        threshold={6}
        server={true}
        total={state.body.length}
        url={`http://localhost:3601/api/v1/see`}
        headers={{}}
      />
      <br />
      <Modal open={state.modal} type="medium" close={() => closeModal()}>
        <Form method="POST" handleSubmit={handleSubmit} width="100%">
          <Input
            type="email"
            label="Email"
            placeholder="Enter Email"
            name="email"
            value={state.email}
            id="email"
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

          <Button type="submit" label="Login" id="login" value="login" />
        </Form>
      </Modal>
    </div>
  );
};

export default create;
