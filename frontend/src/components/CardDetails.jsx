import Card from "react-bootstrap/Card";

export default function CardDetails(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
