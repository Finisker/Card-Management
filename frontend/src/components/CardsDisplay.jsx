import { Children, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const testCards = [
  {
    title: "Test1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab pariatur est rem saepe, aspernatur temporibus deserunt eaque laboriosam.",
  },
  {
    title: "Test2",
    description:
      "Donec nulla turpis, dignissim at mi nec, laoreet posuere libero. Proin imperdiet porttitor lorem eget sagittis. Nulla dolor felis, porta ut leo vel, posuere volutpat neque.",
  },
];

export default function CardsDisplay(props) {
  const [cards, setCards] = useState(testCards);
  const [tabKey, setTabKey] = useState("cards");
  const children = Children.toArray(props.children);

  // useEffect(() => {
  //   fetch("http://localhost:8080/cards/all")
  //     .then((res) => {
  //       if (!res.ok) {
  //         console.log("Response error");
  //         return;
  //       }

  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCards(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // function addCard(card) {
  //   if (!cards) {
  //     setCards([]);
  //   }

  //   setCards((prev) => [...prev, card]);
  // }

  return (
    <Container className="w-100">
      <Tabs
        defaultActiveKey="cards"
        transition={false}
        className="container"
        onSelect={(e) => setTabKey(e)}
      >
        <Tab
          eventKey="cards"
          title="Cards"
          className={"container pt-3 pb-3 border border-top-0"}
        >
          <Container className="d-flex gap-3">
            {cards &&
              cards.map((card, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
          </Container>
        </Tab>
        <Tab
          eventKey="tags"
          title="Tags"
          className={"container gap-3 pt-3 pb-3 border border-top-0"}
        >
          <Container className="d-flex gap-3">
            {cards &&
              cards.map((card, index) => {
                return (
                  <Card key={index} style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
          </Container>
        </Tab>
        <Tav></Tav>
      </Tabs>
    </Container>
  );
}
