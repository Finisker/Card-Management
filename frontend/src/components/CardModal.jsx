import Modal from "react-bootstrap/Modal";
import CardDetails from "./CardDetails";
import CardCreationForm from "./CardCreationForm";

export default function CardModal(props) {
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
      {!props.edit && <CardDetails data={props.card} size={22} />}
      {props.edit && (
        <CardCreationForm
          data={props.card}
          tags={props.tags}
          size={22}
          bubbleData={bubbleData}
        />
      )}
    </Modal.Body>
  );
}
