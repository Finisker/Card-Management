import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CardDetails from "./CardDetails";
import { useState } from "react";

export default function CardModal(props) {
  return (
    <Modal.Body
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!props.edit && <CardDetails data={props.card} size={22} />}
      {props.edit && <p>Editing a Card</p>}
    </Modal.Body>
  );
}

{
}
