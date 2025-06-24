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
    if (props.content) {
      setDisplayData(props.content.data);
      setEdit(props.content.create);
    }
  }, [props.content]);

  return (
    <Modal
      show={props.show}
      onHide={() => {
        setEdit(false);
        props.onHide();
      }}
      backdrop={edit ? "static" : true}
      keyboard={!edit}
      centered
      style={{
        width: "fit-content",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
    >
      {displayData && props.content.type == "card" && (
        <CardModal
          edit={edit}
          handleClose={props.handleClose}
          card={displayData}
          tags={props.content.tags}
          bubbleData={bubbleData}
        />
      )}
      {displayData && props.content.type == "tag" && (
        <TagModal
          edit={edit}
          handleClose={props.handleClose}
          tag={displayData}
          bubbleData={bubbleData}
        />
      )}
      <Modal.Footer>
        {!edit && (
          <>
            <Button
              variant="danger"
              onClick={() =>
                props.handleDelete(displayData.id, props.content.type)
              }
            >
              Delete
            </Button>
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
            <Button variant="primary" onClick={() => handleRevert()}>
              Revert Changes
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );

  function bubbleData(data) {
    setFormData(data);
  }

  function handleSaveEdit() {
    setDisplayData(formData);
    setEdit(false);
    props.saveData(formData, props.content.type);
  }

  function handleRevert() {
    const confirmed = window.confirm(
      "Are you sure you want to revert changes?"
    );
    if (confirmed) setEdit(false);
  }
}
