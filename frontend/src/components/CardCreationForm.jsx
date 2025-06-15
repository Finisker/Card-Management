import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";

const emptyFormData = { title: "", description: "" };

export default function CardCreationForm(props) {
  const [formData, setFormData] = useState(emptyFormData);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/cards/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("Response error");
          return;
        }

        return res.json();
      })
      .then((data) => {
        console.log("Card added", data);
        props.addCard(data);
      })
      .catch((error) => {
        console.log(error);
      });

    props.addCard(formData);
    setFormData(emptyFormData);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="cardForm.ControlInput1">
        <Form.Label>Card title</Form.Label>
        <Form.Control
          name="title"
          placeholder="Strike"
          onChange={(e) => handleChange(e)}
          value={formData.title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cardForm.ControlTextarea1">
        <Form.Label>Descrition</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          placeholder="Me Kronk! I hit hard!"
          onChange={(e) => handleChange(e)}
          value={formData.description}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
