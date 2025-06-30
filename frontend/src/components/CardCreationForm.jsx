import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../styles/Details.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Dropdown from "react-bootstrap/Dropdown";

import { useState } from "react";

export default function CardCreationForm(props) {
  const [formData, setFormData] = useState(props.data);

  const size = {
    width: props.size,
    height: props.size * 1.5,
    fontSize: props.size / 9,
  };
  const fontSize = {
    title: (size.fontSize / formData.name.length) * 12,
    description: (size.fontSize / Math.sqrt(formData.description.length)) * 6.8,
    manaCost: (size.fontSize / formData.manaCost.length) * 1.3,
    goldCost: (size.fontSize / formData.goldCost.length) * 1.3,
  };
  useEffect(() => {
    props.bubbleData(formData);
  }, [formData, props]);

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   fetch("http://localhost:8080/cards/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         console.log("Response error");
  //         return;
  //       }

  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log("Card added", data);
  //       props.addCard(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   props.addCard(formData);
  //   setFormData(emptyFormData);
  // }

  return (
    <Card
      className="card-container"
      style={{
        width: size.width + "rem",
        height: size.height + "rem",
        fontSize: size.fontSize + "rem",
        backgroundColor: "inherit",
      }}
    >
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          <Form.Group
            className="title"
            controlId="cardForm.ControlInput1"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Form.Control
              className="modal-form cost manaCost"
              name="manaCost"
              placeholder="0"
              onChange={(e) => handleChange(e)}
              value={formData.manaCost}
              style={{
                color: "black",
                fontSize: Math.min(size.fontSize, fontSize.manaCost) + "rem",
                width: size.width / 6.7 + "rem",
                textAlign: "center",
                fontWeight: "500",
              }}
            />
            <Form.Control
              className="modal-form"
              name="name"
              placeholder="Title"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              style={{
                fontSize: Math.min(fontSize.title, size.fontSize * 1.3) + "rem",
                color: "black",
                textAlign: "center",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                fontWeight: "500",
              }}
            />
            <Form.Control
              className="modal-form cost goldCost"
              name="goldCost"
              placeholder="0"
              onChange={(e) => handleChange(e)}
              value={formData.goldCost}
              style={{
                color: "black",
                fontSize: Math.min(size.fontSize, fontSize.goldCost) + "rem",
                width: size.width / 6.7 + "rem",
                textAlign: "center",
                fontWeight: "500",
              }}
            />
          </Form.Group>
        </Card.Title>
        <Form.Group
          className="image"
          controlId="imageInput"
          name="image"
          onChange={(e) => handleImageChange(e)}
        >
          <Form.Label className="w-100 h-100 d-flex align-content-center">
            <Card.Img
              src={formData.image}
              style={{
                overflow: "hidden",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Form.Label>
          <Form.Control
            type="file"
            style={{
              display: "none",
            }}
          />
        </Form.Group>
        <Form.Group
          className="description"
          controlId="cardForm.ControlTextarea1"
        >
          <Form.Control
            className="modal-form"
            name="description"
            as="textarea"
            placeholder="Description"
            rows={3}
            onChange={(e) => handleChange(e)}
            value={formData.description}
            style={{
              fontSize:
                Math.min(fontSize.description, size.fontSize * 0.85) + "rem",
              color: "black",
              padding: "0",
              border: "0",
              backgroundColor: "transparent",
              overflow: "hidden",
              resize: "none",
              height: size.height * 3 + "%",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          />
        </Form.Group>
        {/* <Form.Label
            className="d-flex align-content-center tags"
            onClick={() => handleTagsClick()}
            style={{
              cursor: "pointer",
            }}
          > */}
        <OverlayTrigger
          trigger="click"
          placement="right"
          container={document.body}
          rootClose={false}
          overlay={
            <Popover id="popover-basic">
              <Popover.Header as="h3">Edit tags</Popover.Header>
              <Popover.Body>
                {formData.tags &&
                  formData.tags.map((formTag, index) => {
                    return (
                      <Dropdown
                        key={index}
                        drop="end"
                        style={{
                          width: "100%",
                        }}
                      >
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                          style={{
                            width: "100%",
                            color: "black",
                          }}
                        >
                          {formTag.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {props.tags &&
                            props.tags
                              .filter(
                                (tag) =>
                                  !formData.tags
                                    .map((tag) => tag.id)
                                    .includes(tag.id)
                              )
                              .map((tag, index) => {
                                return (
                                  <Dropdown.Item
                                    key={index}
                                    onClick={() =>
                                      handleTagDropdownItemClick(formTag, tag)
                                    }
                                  >
                                    {tag.name}
                                  </Dropdown.Item>
                                );
                              })}
                          <Dropdown.Item
                            onClick={() => handleTagRemove(formTag)}
                          >
                            Remove Tag
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    );
                  })}
                <Dropdown
                  drop="end"
                  style={{
                    width: "100%",
                  }}
                >
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    style={{
                      width: "100%",
                      color: "black",
                    }}
                  >
                    Add tag
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {props.tags &&
                      props.tags
                        .filter(
                          (tag) =>
                            !formData.tags.map((tag) => tag.id).includes(tag.id)
                        )
                        .map((tag, index) => {
                          return (
                            <Dropdown.Item
                              key={index}
                              onClick={() => handleAddNewTag(tag)}
                            >
                              {tag.name}
                            </Dropdown.Item>
                          );
                        })}
                  </Dropdown.Menu>
                </Dropdown>
              </Popover.Body>
            </Popover>
          }
        >
          <Container className="tags">
            {formData.tags &&
              formData.tags.map((tag, index) => {
                return (
                  <Card.Img
                    key={index}
                    className="tag popover-toggle"
                    src={tag.imagePath}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            {formData.tags && formData.tags.length == 0 && (
              <Card.Img
                className="tag popover-toggle"
                src="plus.png"
                style={{
                  cursor: "pointer",
                }}
              />
            )}
          </Container>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleImageChange(e) {
    setFormData((prev) => {
      return { ...prev, image: URL.createObjectURL(e.target.files[0]) };
    });
  }

  function handleTagDropdownItemClick(oldTag, newTag) {
    setFormData((prev) => {
      return {
        ...prev,
        tags: prev.tags.map((t) => (t.id == oldTag.id ? newTag : t)),
      };
    });
  }

  function handleAddNewTag(tag) {
    setFormData((prev) => {
      return { ...prev, tags: [...prev.tags, tag] };
    });
  }

  function handleTagRemove(tag) {
    setFormData((prev) => {
      return { ...prev, tags: prev.tags.filter((t) => t.id != tag.id) };
    });
  }
}
