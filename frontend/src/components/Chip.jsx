import { Children } from "react";
import "../styles/Chip.css";

export default function Chip(props) {
  const children = Children.toArray(props.children);

  return (
    <div
      className="container chip-container mb-3"
      onClick={props.handleOnClick}
    >
      <span>{children}</span>
    </div>
  );
}
