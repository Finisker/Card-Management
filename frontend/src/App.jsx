import { useEffect, useState } from "react";
import CardDetails from "./components/CardDetails";
import CardForm from "./components/CardForm";

export default function App() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/cards/all")
      .then((res) => {
        if (!res.ok) {
          console.log("Response error");
          return;
        }

        return res.json();
      })
      .then((data) => {
        setCards(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addCard(card) {
    setCards((prev) => [...prev, card]);
  }

  return (
    <>
      <CardForm addCard={addCard}></CardForm>
      {cards &&
        cards.map((card, index) => {
          return <CardDetails key={index} data={card}></CardDetails>;
        })}
    </>
  );
}
