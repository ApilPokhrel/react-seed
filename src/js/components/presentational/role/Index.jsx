import React from "react";
import DataTable from "../DataTable.jsx";
import Modal from "../Modal.jsx";
import Input from "../Input.jsx";
import Form from "../Form.jsx";
import Button from "../Button.jsx";
import Select from "../Select.jsx";
import Api from "../../../common/ApiService";
import Routes from "../../../common/Routes";

let create = () => {
  const [state, setState] = React.useState({
    name: "",
    permissions: [],
    desc: "",
    is_admin: false,
    head: ["S.N", "Name", "Description", "Action"],
    body: [],
    filter: [
      {
        key: "sn",
        render: (d, i) => {
          return i + 1;
        }
      },
      {
        key: "name",
        render: (d, i) => {
          return d.name || "N/A";
        }
      },

      {
        key: "desc",
        render: (d, i) => {
          return d.desc || "N/A";
        }
      },
      {
        key: "action",
        render: (d, i) => {
          return (
            <div style={{ display: "inline-block" }}>
              <button className="btn btn-primary" onClick={() => openModal(d._id)}>
                Edit
              </button>
              <button className="btn btn-warning" onClick={() => deleteRole(d._id)}>
                Del
              </button>
            </div>
          );
        }
      }
    ],
    reload: false,
    role_id: "",
    modal: false,
    addModal: false
  });

  const handleChange = name => event => {
    event.preventDefault();
    setState({ ...state, [name]: event.target.value });
  };

  const closeModal = () => {
    setState({ ...state, ["modal"]: false, ["addModal"]: false });
  };

  const deleteRole = async id => {
    await Api.init(Routes.role.delete.remove(id), {});
    alert("Role Deleted");
  };
  const openModal = async id => {
    if (state.modal) {
      setState({ ...state, ["modal"]: false });
    } else {
      let {
        data: { _id, name, permissions, desc }
      } = await Api.init(Routes.role.get.detail(id), state);
      setState({
        ...state,
        ["modal"]: true,
        ["name"]: name,
        ["desc"]: desc,
        ["role_id"]: _id,
        ["permissions"]: permissions
      });
    }
  };

  const openAddModal = () => {
    if (state.addModal) {
      setState({ ...state, ["addModal"]: false });
    } else {
      setState({ ...state, ["addModal"]: true });
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let {
      data: { name, permissions, desc }
    } = await Api.init(Routes.role.post.create(), state);
    alert("Role Created");
  };

  const handleEdit = async event => {
    event.preventDefault();
    let {
      data: { name, permissions, desc }
    } = await Api.init(Routes.permission.patch.edit(state.perm_id), state);
    setState({
      ...state,
      ["modal"]: true,
      ["name"]: name,
      ["desc"]: desc,
      ["permissions"]: permissions
    });
    alert("Role Edited");
  };

  return (
    <div className="container">
      <input type="hidden" value="" id="perm_id" />

      <Modal open={state.addModal} type="medium" close={() => closeModal()}>
        <Form method="POST" handleSubmit={handleSubmit} width="100%">
          <Input
            id="r-name"
            label="Name"
            name="name"
            type="text"
            placeholder="Role Name"
            value={state.name}
            handleChange={handleChange("name")}
          />

          <Input
            id="r-desc"
            label="Description"
            type="text"
            placeholder="Description"
            name="desc"
            value={state.desc}
            handleChange={handleChange("desc")}
          />

          <hr />
          <Button label="Submit" type="submit" />
        </Form>
      </Modal>
      <Button
        label="Add"
        type="button"
        handleChange={() => openAddModal()}
        style={{ width: "200px" }}
      />
      <DataTable
        head={state.head}
        body={state.body}
        filter={state.filter}
        threshold={10}
        server={true}
        total={5}
        url={`http://localhost:3000/auth/role`}
        headers={{}}
        reload={state.reload}
      />
      <Modal open={state.modal} type="medium" close={() => closeModal()}>
        <Form method="POST" handleSubmit={handleEdit} width="100%">
          <Input
            id="r-name"
            label="Name"
            name="name"
            type="text"
            placeholder="Role Name"
            value={state.name}
            handleChange={handleChange("name")}
          />

          <Input
            id="r-desc"
            label="Description"
            type="text"
            placeholder="Description"
            name="desc"
            value={state.desc}
            handleChange={handleChange("desc")}
          />

          <hr />
          <Button label="Submit" type="submit" width="100%" />
        </Form>
      </Modal>
    </div>
  );
};

export default create;
