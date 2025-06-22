import Modal from "react-bootstrap/Modal";
import TagDetails from "./TagDetails";
import TagCreationForm from "./TagCreationForm";

export default function TagModal(props) {
  function bubbleData(data) {
    props.bubbleData(data);
  }

  return (
    <Modal.Body
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {!props.edit && <TagDetails data={props.tag} size={22} />}
      {props.edit && (
        <TagCreationForm data={props.tag} size={22} bubbleData={bubbleData} />
      )}
    </Modal.Body>
  );
}
