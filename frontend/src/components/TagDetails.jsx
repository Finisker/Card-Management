import Card from "react-bootstrap/Card";
import "../styles/Details.css";

export default function TagDetails(props) {
  const size = {
    width: props.size * 1.5,
    height: props.size,
    fontSize: props.size / 9,
  };

  const fontSize = {
    title: (size.fontSize / props.data.name.length) * 12,
    description:
      (size.fontSize / Math.sqrt(props.data.description.length)) * 9.6,
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
          <span
            className="title"
            style={{
              fontSize: Math.min(fontSize.title, size.fontSize * 1.3) + "rem",
              color: "black",
              textAlign: "center",
              padding: "0",
              border: "0",
              backgroundColor: "transparent",
              fontWeight: "500",
            }}
          >
            {props.data.name}
          </span>
          <Card.Img
            className="tag-art right-art"
            src={props.data.imagePath === "" ? null : props.data.imagePath}
            alt="null"
            style={{
              overflow: "hidden",
            }}
          />
        </Card.Title>
        <Card.Text
          className="description"
          style={{
            fontSize: Math.min(fontSize.description, size.fontSize) + "rem",
          }}
        >
          {props.data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
