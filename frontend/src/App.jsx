import { useEffect, useState } from "react";
import CardDetails from "./components/CardDetails";
import Chip from "./components/Chip";
import SearchBar from "./components/SearchBar";
import CardsDisplay from "./components/CardsDisplay";
import CreationModal from "./components/CreationModal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./styles/App.css";

export default function App() {
  const [showCardModal, setShowCardModal] = useState(false);

  return (
    // <div className="app-container container-fluid d-flex flex-column justify-content-center h-100">
    //   <SearchBar />
    //   <CardsDisplay>
    //     {/* <Button variant="primary" onClick={() => setShowCardModal(true)}>
    //       Launch demo modal
    //     </Button> */}
    //   </CardsDisplay>
    //   <CreationModal
    //     show={showCardModal}
    //     onHide={() => setShowCardModal(false)}
    //   />
    // </div>
    <div className="move">
      <CardDetails></CardDetails>
    </div>
  );
}
