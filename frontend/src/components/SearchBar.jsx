import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Chip from "./Chip";
import { useState } from "react";
import "../styles/SearchBar.css";

const testTags = [
  "Tag1",
  "Tag2",
  "Tag3",
  "Tag412323443534535345",
  "Tag5",
  "Tag6",
  "Tag6",
];

export default function SearchBar() {
  const [tags, setTags] = useState(testTags);

  function handleOnClick(e) {
    const tag = e.target.innerText;
    setTags(tags.filter((ele) => ele != tag));
  }
  return (
    <div className="search-container container flex-column">
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Card name"
            className="mb-3"
          >
            <Form.Control
              type="name"
              placeholder="Strike"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={4}>
          <FloatingLabel
            controlId="floatingInput"
            label="Tags"
            className="mb-3"
          >
            <Form.Control
              type="tags"
              placeholder="Physical"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-start justify-content-start gap-3 mb-3 flex-wrap">
          {tags &&
            tags.map((tag, index) => {
              return (
                <Chip key={index} handleOnClick={handleOnClick}>
                  {tag}
                </Chip>
              );
            })}
        </Col>
      </Row>
    </div>
  );
}
