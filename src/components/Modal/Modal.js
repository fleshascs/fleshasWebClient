import React from "react";
import ReactDOM from "react-dom";

const MODAL_CONTAINER_ELEMENT_ID = "modal-root";

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById(MODAL_CONTAINER_ELEMENT_ID);
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
