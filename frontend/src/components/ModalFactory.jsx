import Modal from "react-bootstrap/Modal";
import CardModal from "./CardModal";
import TagModal from "./TagModal";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function ModalFactory(props) {
  const [edit, setEdit] = useState(false);
  const [displayData, setDisplayData] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (props.content) setDisplayData(props.content.data);
  }, [props.content]);

  function bubbleData(data) {
    setFormData(data);
  }

  function handleSaveEdit() {
    setDisplayData(formData);
    setEdit(false);
    props.bubbleData(formData);
  }

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
      {displayData && props.content.type == "card" && (
        <CardModal
          edit={edit}
          handleClose={props.handleClose}
          card={displayData}
          bubbleData={bubbleData}
        />
      )}
      {displayData && props.content.type == "tag" && (
        <TagModal
          edit={edit}
          handleClose={props.handleClose}
          tag={displayData}
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
            <Button variant="secondary" onClick={() => handleSaveEdit()}>
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
