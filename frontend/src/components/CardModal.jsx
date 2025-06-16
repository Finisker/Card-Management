import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CardDetails from "./CardDetails";
import { useState } from "react";

export default function CardModal(props) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!edit && <CardDetails data={props.card} size={22} />}
      </Modal.Body>
      <Modal.Footer>
        {!edit && (
          <>
            <Button variant="secondary" onClick={() => setEdit(true)}>
              Edit
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Close
            </Button>
          </>
        )}
        {edit && (
          <>
            <Button variant="secondary" onClick={() => setEdit(false)}>
              Save changes
            </Button>
            <Button variant="primary" onClick={() => setEdit(false)}>
              Revert Changes
            </Button>
          </>
        )}
      </Modal.Footer>
      ;
    </>
  );
}

{
}
