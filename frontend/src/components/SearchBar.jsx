import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Chip from "./Chip";
import { useEffect, useMemo, useState } from "react";
import "../styles/SearchBar.scss";

export default function SearchBar(props) {
  const [activeTags, setActiveTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [cardInput, setCardInput] = useState("");

  const dropdownTags = useMemo(() => {
    return props.tags
      .filter((tag) => tag.name.includes(tagInput))
      .filter((tag) => !activeTags.map((aTag) => aTag.name).includes(tag.name));
  }, [activeTags, tagInput, props.tags]);

  const { search } = props;

  useEffect(() => {
    const query = {
      cardName: cardInput,
      tags: activeTags.map((tag) => {
        return { id: tag.id };
      }),
    };
    setTagInput("");
    search(query);
  }, [activeTags, cardInput, search]);

  return (
    <div className="search-container container flex-column">
      <Row className="align-items-center">
        <Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Card name"
            className=""
          >
            <Form.Control
              type="name"
              placeholder=""
              value={cardInput}
              autoComplete="off"
              onChange={(e) => setCardInput(e.target.value)}
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={2}>
          <DropdownButton id="dropdown-button" drop="end" title="Tags">
            <Form.Control
              type="tags"
              placeholder=""
              value={tagInput}
              autoComplete="off"
              onChange={(e) => setTagInput(e.target.value)}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                zIndex: 1,
                backdropFilter: "blur(8px)",
              }}
            />
            <div className="scrollable-content">
              {dropdownTags &&
                dropdownTags.map((tag, index) => {
                  return (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropDownItemClick(tag)}
                      style={{
                        color: "white",
                      }}
                    >
                      {tag.name}
                    </Dropdown.Item>
                  );
                })}
            </div>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex align-items-start justify-content-start gap-3 mb-3 flex-wrap">
          {activeTags &&
            activeTags.map((tag, index) => {
              return (
                <Chip key={index} onClick={() => handleOnClick(tag)}>
                  {tag.name}
                </Chip>
              );
            })}
        </Col>
      </Row>
    </div>
  );

  function handleOnClick(tag) {
    setActiveTags(activeTags.filter((ele) => ele.id != tag.id));
  }

  function handleDropDownItemClick(tag) {
    setActiveTags((prev) => [...prev, tag]);
  }
}
