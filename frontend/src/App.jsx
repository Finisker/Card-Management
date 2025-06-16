import { useEffect, useState } from "react";
import CardDetails from "./components/CardDetails";
import Chip from "./components/Chip";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import CreationModal from "./components/ModalFactory";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./styles/App.css";

export default function App() {
  const [query, setQuery] = useState(null);

  function search(query) {
    setQuery(query);
  }

  return (
    <div className="app-container container-fluid h-100">
      <div className="searchbar-container">
        <SearchBar search={search} />
      </div>
      <div className="cardsdisplay-container">
        <Display query={query} />
      </div>
    </div>
  );
}
