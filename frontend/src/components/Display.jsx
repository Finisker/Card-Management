import { Children, useMemo, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import CardDetails from "./CardDetails";
import TagDetails from "./TagDetails";
import CreationModal from "./ModalFactory";
import "../styles/Display.css";
import ModalFactory from "./ModalFactory";

const testCards = [
  {
    id: 1,
    name: "Strike",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "2",
    goldCost: "1",

    tags: [
      {
        id: 1,
        name: "Heal2",
      },
    ],
  },
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 3,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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
  {
    id: 2,
    name: "Burning Strike2",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

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

const emptyCard = {
  id: -1,
  name: "",
  type: "",
  description: "",

  manaCost: "",
  goldCost: "",

  tags: [],
};

export default function Display(props) {
  const [cards, setCards] = useState(testCards);
  const [tags, setTags] = useState(testTags);
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
  }, [props.query, cards, tags]);

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

  function handleCardOnClikck(card, create = false) {
    const newModalContent = {
      type: "card",
      data: card,
      create: create,
    };
    setModalContent(newModalContent);
    setShowModal(true);
  }

  function handleTagOnClikck(tag) {
    const newModalContent = {
      type: "tag",
      data: tag,
    };
    setModalContent(newModalContent);
    setShowModal(true);
  }

  function bubbleData(data) {
    const newCards = cards.filter((card) => card.id !== data.id);
    setCards([...newCards, data]);
  }

  function test() {
    window.alert("test");
  }

  return (
    <>
      <Container className="d-flex flex-column">
        <Tabs defaultActiveKey="cards" transition={false}>
          <Tab
            eventKey="cards"
            title="Cards"
            className={"container pt-3 pb-3 h-100"}
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Container className="d-flex gap-3 flex-wrap justify-content-between">
              <div
                className="container"
                style={{
                  position: "absolute",
                  top: "0",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <label
                  onClick={() => handleCardOnClikck(emptyCard, true)}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    transform: "translateX(-30%)",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      color: "black",
                      border: "none",
                    }}
                  >
                    Add new card
                  </Button>
                </label>
              </div>
              {displayCards
                .toSorted((a, b) => a.name.localeCompare(b.name))
                .map((card, index) => {
                  return (
                    <label
                      key={index}
                      onClick={() => handleCardOnClikck(card)}
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
              <div
                className="container"
                style={{
                  position: "absolute",
                  top: "0",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <label
                  onClick={() => handleCardOnClikck(emptyCard, true)}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    transform: "translateX(-32%)",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      color: "black",
                      border: "none",
                    }}
                  >
                    Add new tag
                  </Button>
                </label>
              </div>
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <label
                      key={index}
                      onClick={() => handleTagOnClikck(tag)}
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
        bubbleData={bubbleData}
      />
    </>
  );
}
