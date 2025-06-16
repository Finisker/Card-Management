import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Chip from "./Chip";
import { useEffect, useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar(props) {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [cardInput, setCardInput] = useState("");

  useEffect(() => {
    const query = {
      cardName: cardInput,
      tags: tags,
    };
    props.search(query);
  }, [tags, cardInput]);

  function handleOnClick(e) {
    const tag = e.target.innerText;
    setTags(tags.filter((ele) => ele != tag));
  }

  function handleTagKeyDown(e) {
    if (e.code !== "Enter") return;

    setTags((prev) => [...prev, tagInput]);
    setTagInput("");
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
              value={cardInput}
              onChange={(e) => setCardInput(e.target.value)}
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
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => handleTagKeyDown(e)}
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-start justify-content-start gap-3 mb-3 flex-wrap">
          {tags.map((tag, index) => {
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
