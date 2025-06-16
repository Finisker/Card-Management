import Modal from "react-bootstrap/Modal";
import CardModal from "./CardModal";
import TagModal from "./TagModal";

export default function ModalFactory(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop={props.backdrop}
      keyboard={props.keyboard}
      style={{
        width: "fit-content",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
      centered
    >
      {props.content && props.content.type == "card" && (
        <CardModal handleClose={props.handleClose} card={props.content.data} />
      )}
      {props.content && props.content.type == "tag" && (
        <TagModal handleClose={props.handleClose} tag={props.content.data} />
      )}
    </Modal>
  );
}
