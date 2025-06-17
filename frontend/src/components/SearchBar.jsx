import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Chip from "./Chip";
import { useEffect, useMemo, useState } from "react";
import "../styles/SearchBar.css";

const testTags = ["Heal", "tag2", "tag3", "tag4", "tag5"];

export default function SearchBar(props) {
  const [activeTags, setActiveTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [cardInput, setCardInput] = useState("");

  const dropdownTags = useMemo(() => {
    return testTags
      .filter((tag) => {
        return tag.includes(tagInput);
      })
      .filter((tag) => {
        return !activeTags.includes(tag);
      });
  }, [activeTags, tagInput]);

  useEffect(() => {
    const query = {
      cardName: cardInput,
      tags: activeTags,
    };
    setTagInput("");
    props.search(query);
  }, [activeTags, cardInput]);

  function handleOnClick(e) {
    const tag = e.target.innerText;
    setActiveTags(activeTags.filter((ele) => ele != tag));
  }

  function handleDropDownItemClick(e) {
    setActiveTags((prev) => [...prev, e.target.innerText]);
  }

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
              autocomplete="off"
              onChange={(e) => setCardInput(e.target.value)}
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={2}>
          <DropdownButton id="dropdown-basic" drop="end" title="Tags">
            <Form.Control
              type="tags"
              placeholder=""
              value={tagInput}
              autocomplete="off"
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
                      onClick={(e) => handleDropDownItemClick(e)}
                      style={{
                        color: "white",
                      }}
                    >
                      {tag}
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
