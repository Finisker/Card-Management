import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TagDetails from "./TagDetails";

export default function TagModal(props) {
  return (
    <>
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TagDetails data={props.tag} size={22} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Edit</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
      ;
    </>
  );
}
