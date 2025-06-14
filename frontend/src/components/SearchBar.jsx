import "../styles/SearchBar.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Chip from "./Chip";
import { useState } from "react";

const testTags = ["tag1", "tag2", "tag3", "tag4"];

export default function SearchBar() {
  const [tags, setTags] = useState(testTags);

  function handleOnClick(e) {
    const tag = e.target.innerText;
    setTags(tags.filter((ele) => ele != tag));
  }
  return (
    <div className="container search-container">
      <FloatingLabel
        controlId="floatingInput"
        label="Card name"
        className="mb-3"
      >
        <Form.Control type="name" placeholder="Strike" />
      </FloatingLabel>
      <div className="tags-container">
        <FloatingLabel controlId="floatingInput" label="Tags" className="mb-3">
          <Form.Control type="tags" placeholder="Physical" />
        </FloatingLabel>
        {tags &&
          tags.map((tag, index) => {
            return (
              <>
                <Chip key={index} handleOnClick={handleOnClick}>
                  {tag}
                </Chip>
              </>
            );
          })}
      </div>
    </div>
  );
}
