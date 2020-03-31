import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxillary";
import BackDrop from "../BackDrop/BackDrop";

const Modal = props => (
  <Aux>
    <BackDrop show={props.show} clicked={props.ModalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
