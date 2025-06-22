import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../styles/Details.css";

import { useState } from "react";

export default function TagCreationForm(props) {
  const [formData, setFormData] = useState(props.data);

  const size = {
    width: props.size * 1.5,
    height: props.size,
    fontSize: props.size / 6.5,
  };
  const fontSize = {
    title: (size.fontSize / formData.name.length) * 12,
    description: (size.fontSize / Math.sqrt(formData.description.length)) * 6.4,
  };

  useEffect(() => {
    props.bubbleData(formData);
  }, [formData]);

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
      style={{
        width: size.width + "rem",
        height: size.height + "rem",
        fontSize: size.fontSize + "rem",
        backgroundColor: "inherit",
      }}
    >
      <Card.Body className="card-body">
        <Card.Title className="card-title-tag border-bottom">
          <Form.Group
            className="tag-title"
            controlId="cardForm.ControlInput1"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Form.Control
              className="modal-form"
              name="name"
              onChange={(e) => handleChange(e)}
              value={formData.name}
              placeholder="Title"
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
            <Form.Group
              className="tag-art right-art"
              controlId="imageInput"
              name="image"
              onChange={(e) => handleImageChange(e)}
            >
              <Form.Label className="h-100 d-flex align-content-center">
                <Card.Img
                  src={formData.image}
                  style={{
                    overflow: "hidden",
                    borderRadius: "50%",
                    border: "1px solid",
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
          </Form.Group>
        </Card.Title>

        <Form.Group
          className="description"
          controlId="cardForm.ControlTextarea1"
        >
          <Form.Control
            className="modal-form"
            name="description"
            placeholder="Description"
            as="textarea"
            rows={3}
            onChange={(e) => handleChange(e)}
            value={formData.description}
            style={{
              fontSize: Math.min(fontSize.description, size.fontSize) + "rem",
              color: "black",
              padding: "0",
              border: "0",
              backgroundColor: "transparent",
              overflow: "hidden",
              resize: "none",
              height: size.height * 7.5 + "%",
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setFormData({ ...formData, image: URL.createObjectURL(file) });
  }
}
