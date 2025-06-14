import { useEffect, useState } from "react";
import CardDetails from "./components/CardDetails";
import CardForm from "./components/CardForm";
import "./App.css";
import Chip from "./components/Chip";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [cards, setCards] = useState(null);

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

  function addCard(card) {
    if (!cards) {
      setCards([]);
    }

    setCards((prev) => [...prev, card]);
  }

  return (
    <>
      <SearchBar />
      <CardForm addCard={addCard}></CardForm>
      <div className="cards">
        {cards &&
          cards.map((card, index) => {
            return <CardDetails key={index} data={card}></CardDetails>;
          })}
      </div>
    </>
  );
}
