import Card from "react-bootstrap/Card";
import "../styles/CardDetails.css";
import Container from "react-bootstrap/esm/Container";

const testCard = {
  title: "Strike",
  type: "postman_type",
  description:
    "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
  imagePath: "postman_image_path",

  manaCost: 2,
  goldCost: 1,

  tags: [
    {
      id: 1,
    },
  ],
};

export default function CardDetails() {
  const props = {
    size: 18,
    data: testCard,
  };

  const size = {
    width: props.size,
    height: props.size * 1.5,
    fontSize: props.size / 9,
  };

  const fontSize = {
    title: (size.fontSize / props.data.title.length) * 12,
    description:
      (size.fontSize / Math.sqrt(props.data.description.length)) * 6.8,
  };

  return (
    <Card
      style={{
        width: size.width + "rem",
        height: size.height + "rem",
        fontSize: size.fontSize + "rem",
      }}
    >
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          <span className="cost manaCost">{props.data.manaCost}</span>
          <span
            className="title"
            style={{
              fontSize: Math.min(fontSize.title, size.fontSize * 1.3) + "rem",
            }}
          >
            {props.data.title}
          </span>
          <span className="cost goldCost">{props.data.goldCost}</span>
        </Card.Title>
        <Card.Img className="image" src="strike.jpg" />
        <Card.Text
          className="description"
          style={{
            fontSize:
              Math.min(fontSize.description, size.fontSize * 0.85) + "rem",
          }}
        >
          {props.data.description}
        </Card.Text>
        <Container className="tags">
          <Card.Img className="tag" src="fire.png" />
          <Card.Img className="tag" src="citrina.png" />
          <Card.Img className="tag" src="fire.png" />
          <Card.Img className="tag" src="citrina.png" />
        </Container>
      </Card.Body>
    </Card>
  );
}
