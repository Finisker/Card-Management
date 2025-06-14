import Form from "react-bootstrap/Form";

export default function CardForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="cardForm.ControlInput1">
        <Form.Label>Card name</Form.Label>
        <Form.Control type="name" placeholder="Strike" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cardForm.ControlTextarea1">
        <Form.Label>Descrition</Form.Label>
        <Form.Control
          type="description"
          as="textarea"
          rows={3}
          placeholder="Me Kronk! I hit hard!"
        />
      </Form.Group>
    </Form>
  );
}
