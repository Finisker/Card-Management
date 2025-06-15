import Card from "react-bootstrap/Card";
import "../styles/Details.css";

export default function TagDetails(props) {
  const size = {
    width: props.size * 1.5,
    height: props.size,
    fontSize: props.size / 9,
  };

  const fontSize = {
    title: (size.fontSize / props.data.title.length) * 12,
    description:
      (size.fontSize / Math.sqrt(props.data.description.length)) * 10,
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
        <Card.Title className="card-title-tag border-bottom">
          <Card.Img className="tag-art left-art" src={props.data.imagePath} />
          <span
            className="title"
            style={{
              fontSize: Math.min(fontSize.title, size.fontSize * 1.3) + "rem",
            }}
          >
            {props.data.title}
          </span>
          <Card.Img className="tag-art right-art" src={props.data.imagePath} />
        </Card.Title>
        <Card.Text
          className="description"
          style={{
            fontSize: Math.min(fontSize.description, size.fontSize * 2) + "rem",
          }}
        >
          {props.data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
