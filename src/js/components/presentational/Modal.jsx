import React, { Component } from "react";
import Input from "./Input.jsx";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.open,
      email: "",
      psw: ""
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    let modal = document.getElementById("ap-myModal");
    modal.style.display = "none";
  }

  render() {
    let modal = document.getElementById("ap-myModal");
    let modalWidth = "50%";
    if (this.props.modalType && this.props.modalType === "large") modalWidth = "80%";
    else if (this.props.modalType && this.props.modalType === "small") modalWidth = "30%";
    if (modal) {
      modal.style.display = "block";
    }
    return (
      <React.Fragment>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ap-modal {
              display: block;
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.ap-modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${modalWidth};
}


.ap-modal-close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.ap-modal-close:hover,
.ap-modal-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}`
          }}
        ></style>
        {this.props.open ? (
          <div id="ap-myModal" className="ap-modal">
            <div className="ap-modal-content">
              <span className="ap-modal-close" onClick={this.closeModal}>
                &times;
              </span>
              {this.props.body}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
