import { Children } from "react";
import "../styles/Chip.css";

export default function Chip(props) {
  const children = Children.toArray(props.children);

  return (
    <div className="chip ps-2 pe-2" onClick={props.handleOnClick}>
      {children}
    </div>
  );
}
