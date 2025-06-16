import { Children, useMemo, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import CardDetails from "./CardDetails";
import TagDetails from "./TagDetails";
import CreationModal from "./ModalFactory";
import "../styles/Display.css";
import ModalFactory from "./ModalFactory";

const testCards = [
  {
    name: "Strike",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "strike.jpg",

    manaCost: 2,
    goldCost: 1,

    tags: [
      {
        id: 1,
        name: "Heal2",
      },
    ],
  },
  {
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "strike.jpg",

    manaCost: 14,
    goldCost: 12,

    tags: [
      {
        id: 1,
        name: "Heal",
      },
      {
        id: 1,
        name: "Heal2",
      },
    ],
  },
];

const testTags = [
  {
    name: "Heal Scruvy",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "citrina.png",
  },
  {
    name: "Burn motherf***er",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "fire.png",
  },
];
export default function Display(props) {
  const [cards, setCards] = useState(testCards);
  const [tags, setTags] = useState(testTags);
  const [tabKey, setTabKey] = useState("cards");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const displayCards = useMemo(() => {
    if (!props.query) return cards;

    const cardsByName = cards.filter((card) =>
      card.name.toLowerCase().includes(props.query.cardName.toLowerCase())
    );

    const cardsByTags = props.query.tags.length
      ? cardsByName.filter((card) => {
          return props.query.tags.every((tag) => {
            return card.tags.map((tag) => tag.name).includes(tag);
          });
        })
      : cardsByName;

    return cardsByTags;
  }, [props.query]);

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

  function handleCardOnClikck(index) {
    const newModalContent = {
      type: "card",
      data: displayCards[index],
    };
    setModalContent(newModalContent);
    setShowModal(true);
  }

  function handleTagOnClikck(index) {
    const newModalContent = {
      type: "tag",
      data: tags[index],
    };
    setModalContent(newModalContent);
    setShowModal(true);
  }

  return (
    <>
      <Container className="test2">
        <Tabs
          defaultActiveKey="cards"
          transition={false}
          className="container"
          onSelect={(e) => setTabKey(e)}
        >
          <Tab
            eventKey="cards"
            title="Cards"
            className={"container pt-3 pb-3 h-100"}
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Container className="d-flex gap-3 flex-wrap justify-content-start">
              {displayCards.map((card, index) => {
                return (
                  <label
                    key={index}
                    onClick={() => handleCardOnClikck(index)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "rgba(255,255,255,0.5)",
                    }}
                  >
                    <CardDetails data={card} size={14} id={"card" + index} />
                  </label>
                );
              })}
            </Container>
          </Tab>
          <Tab
            eventKey="tags"
            title="Tags"
            className={"container gap-3 pt-3 pb-3"}
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Container className="d-flex gap-3 flex-wrap justify-content-start">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <label
                      key={index}
                      onClick={() => handleTagOnClikck(index)}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "rgba(255,255,255,0.5)",
                      }}
                    >
                      <TagDetails key={index} data={tag} size={14} />
                    </label>
                  );
                })}
            </Container>
          </Tab>
        </Tabs>
      </Container>

      <ModalFactory
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        content={modalContent}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}
