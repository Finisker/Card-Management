import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CardCreationForm from "./CardCreationForm";

export default function CreationModal(props) {
  function addCard() {}

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CardCreationForm addCard={addCard}></CardCreationForm>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
