import { Children, useEffect, useMemo, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import CardDetails from "./CardDetails";
import TagDetails from "./TagDetails";
import CreationModal from "./ModalFactory";
import "../styles/Display.scss";
import ModalFactory from "./ModalFactory";

export default function Display(props) {
  const [cards, setCards] = useState([]);
  const [tags, setTags] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const displayCards = useMemo(() => {
    if (!props.query) return cards;

    const cardsByName = cards.filter((card) =>
      card.name.toLowerCase().includes(props.query.cardName.toLowerCase())
    );

    const cardsByTags = props.query.tags.length
      ? cardsByName.filter((card) => {
          return props.query.tags.every((qTag) => {
            return card.tags.map((cTag) => cTag.id).includes(qTag.id);
          });
        })
      : cardsByName;

    const mergedCards = cardsByTags.map((card) => {
      return {
        ...card,
        tags: card.tags.map((cTag) => {
          return {
            ...tags.find((tTag) => {
              return tTag.id === cTag.id;
            }),
          };
        }),
      };
    });

    return mergedCards;
  }, [props.query, cards, tags]);

  useEffect(() => {
    setTags(testTags);
    setCards(testCards);
  }, []);

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
    <>
      <Container className="d-flex flex-column display-container">
        <Tabs defaultActiveKey="cards" transition={false}>
          <Tab
            eventKey="cards"
            title="Cards"
            className={"container pt-3 pb-3 h-100"}
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
                  onClick={() => handleTagOnClikck(emptyTag, true)}
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
        saveData={saveData}
        handleDelete={handleDelete}
      />
    </>
  );

  function handleCardOnClikck(card, create = false) {
    const newCard = JSON.parse(JSON.stringify(card));
    if (create) {
      newCard.id = maxId(cards) + 1;
    }

    const newModalContent = {
      type: "card",
      data: newCard,
      tags: tags,
      create: create,
    };
    setModalContent(newModalContent);
    setShowModal(true);
  }

  function handleTagOnClikck(tag, create = false) {
    const newTag = JSON.parse(JSON.stringify(tag));
    if (create) {
      newTag.id = maxId(tags) + 1;
    }
    const newModalContent = {
      type: "tag",
      data: newTag,
      create: create,
    };
    setModalContent(newModalContent);
    setShowModal(true);
  }

  function saveData(data, type) {
    switch (type) {
      case "card":
        console.log("Saving a card", data);
        if (cards.findIndex((c) => c.id == data.id) == -1) {
          setCards((prev) => [...prev, data]);
        } else {
          setCards((prev) => prev.map((c) => (c.id == data.id ? data : c)));
        }
        return;

      case "tag":
        console.log("Saving a tag", data);
        if (tags.findIndex((t) => t.id == data.id) == -1) {
          setTags((prev) => [...prev, data]);
        } else {
          setTags((prev) => prev.map((t) => (t.id == data.id ? data : t)));
        }
        return;

      default:
        console.log(
          "Pass a type to the 'saveData' funtion in 'Display' component"
        );
        return;
    }
  }

  function handleDelete(id, type) {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      setShowModal(false);
      switch (type) {
        case "card":
          setCards(cards.filter((card) => card.id !== id));
          return;
        case "tag":
          setTags(tags.filter((tag) => tag.id !== id));
          return;
        default:
          return;
      }
    }
  }

  function maxId(collection) {
    if (!collection || collection.length == 0) {
      return 0;
    }

    if (!collection[0].id) {
      return -1;
    }

    const max = collection.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );

    return max.id;
  }
}

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
      },
      {
        id: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Heal",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

    tags: [
      {
        id: 2,
      },
    ],
  },
  {
    id: 4,
    name: "Bunny",
    type: "postman_type",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",

    manaCost: "14",
    goldCost: "12",

    tags: [
      {
        id: 3,
      },
    ],
  },
];

const testTags = [
  {
    id: 1,
    name: "Heal Scruvy",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "citrina.png",
  },
  {
    id: 2,
    name: "Burn motherf***er",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "fire.png",
  },
  {
    id: 3,
    name: "Bunny",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "bunny.png",
  },
  {
    id: 4,
    name: "Pizza",
    description:
      "Pellentesque vitae enim vel elit facilisis egestas vitae vitae est.",
    imagePath: "pizza.png",
  },
];

const emptyTag = {
  name: "",
  description: "",
  imagePath: "",
};

const emptyCard = {
  name: "",
  type: "",
  description: "",

  manaCost: "",
  goldCost: "",

  tags: [],
};
