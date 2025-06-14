import CloseButton from "react-bootstrap/CloseButton";
import "../styles/Chip.css";

export default function Chip(props) {
  return (
    <div className="container">
      <span>{props.children}</span>
      <CloseButton />
    </div>
  );
}
