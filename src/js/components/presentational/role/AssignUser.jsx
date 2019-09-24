import React from "react";
import DataTable from "../DataTable.jsx";
import Modal from "../Modal.jsx";
import Button from "../Button.jsx";
import Api from "../../../common/ApiService";
import { Link } from "react-router-dom";
import Routes from "../../../common/Routes";
import Config from "../../../common/Config.js";
import RegisterContainer from "../../container/RegisterContainer.jsx";

let create = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    gender: "",
    city: "",
    dob: new Date(),
    showPassword: false,
    password: "",
    roles: [],
    contact: "",
    head: ["S.N", "Name", "Contact", "Roles", "Action"],
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
          return d.name.first + " " + d.name.last || "N/A";
        }
      },
      {
        key: "contact",
        render: (d, i) => {
          return d.contact[0].address || "N/A";
        }
      },
      {
        key: "roles",
        render: (d, i) => {
          return d.roles.length || "N/A";
        }
      },
      {
        key: "action",
        render: (d, i) => {
          return (
            <div style={{ display: "inline-block" }}>
              <button className="btn btn-primary">
                <Link to={`/user?user_id=${d._id}`} style={{ color: "#fff" }}>
                  Edit
                </Link>
              </button>
              <button className="btn btn-warning" onClick={() => deleteUser(d._id)}>
                Del
              </button>
            </div>
          );
        }
      }
    ],
    reload: false,
    user_id: "",
    modal: false,
    addModal: false
  });

  const closeModal = () => {
    setState({ ...state, ["modal"]: false, ["addModal"]: false });
  };

  const deleteUser = async id => {
    await Api.init(Routes.user.delete.remove(id), {});
    alert("User Deleted");
  };

  const openAddModal = () => {
    if (state.addModal) {
      setState({ ...state, ["addModal"]: false });
    } else {
      setState({ ...state, ["addModal"]: true });
    }
  };

  return (
    <div className="container">
      <input type="hidden" value="" id="perm_id" />

      <Modal open={state.addModal} type="medium" close={() => closeModal()}>
        <RegisterContainer />
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
        url={`${Config.api.base.url}${Routes.user.get.list().url}`}
        headers={{}}
        reload={state.reload}
      />
    </div>
  );
};

export default create;
