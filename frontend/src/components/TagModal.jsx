import Modal from "react-bootstrap/Modal";
import TagDetails from "./TagDetails";

export default function TagModal(props) {
  return (
    <Modal.Body
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!props.edit && <TagDetails data={props.tag} size={22} />}
      {props.edit && <p>Editing a Tag</p>}
    </Modal.Body>
  );
}
