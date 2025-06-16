import Modal from "react-bootstrap/Modal";
import CardModal from "./CardModal";
import TagModal from "./TagModal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ModalFactory(props) {
  const [edit, setEdit] = useState(false);

  return (
    <Modal
      show={props.show}
      onHide={() => {
        setEdit(false);
        props.onHide();
      }}
      backdrop={edit ? "static" : true}
      keyboard={!edit}
      style={{
        width: "fit-content",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
      centered
    >
      {props.content && props.content.type == "card" && (
        <CardModal
          edit={edit}
          handleClose={props.handleClose}
          card={props.content.data}
        />
      )}
      {props.content && props.content.type == "tag" && (
        <TagModal
          edit={edit}
          handleClose={props.handleClose}
          tag={props.content.data}
        />
      )}
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
    </Modal>
  );
}
