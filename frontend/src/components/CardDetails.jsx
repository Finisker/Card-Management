import Card from "react-bootstrap/Card";
import "../styles/Details.scss";
import Container from "react-bootstrap/esm/Container";

export default function CardDetails(props) {
  const size = {
    width: props.size,
    height: props.size * 1.5,
    fontSize: props.size / 9,
  };

  const fontSize = {
    title: (size.fontSize / props.data.name.length) * 12,
    description:
      (size.fontSize / Math.sqrt(props.data.description.length)) * 6.8,
  };
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
          <span className="cost manaCost">{props.data.manaCost}</span>
          <span
            className="title"
            style={{
              fontSize: Math.min(fontSize.title, size.fontSize * 1.3) + "rem",
            }}
          >
            {props.data.name}
          </span>
          <span className="cost goldCost">{props.data.goldCost}</span>
        </Card.Title>
        <Card.Img className="image" src={props.data.image} />
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
          {props.data.tags &&
            props.data.tags
              .toSorted((tag1, tag2) => tag1.display - tag2.display)
              .map((tag, index) => {
                return (
                  <Card.Img key={index} className="tag" src={tag.imagePath} />
                );
              })}
        </Container>
      </Card.Body>
    </Card>
  );
}
