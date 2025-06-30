import { useState, useCallback } from "react";
import CardDetails from "./components/CardDetails";
import Chip from "./components/Chip";
import SearchBar from "./components/SearchBar";
import Display from "./components/Display";
import CreationModal from "./components/ModalFactory";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "./styles/App.scss";

export default function App() {
  const [query, setQuery] = useState(null);
  const [tags, setTags] = useState([]);

  const search = useCallback((query) => {
    setQuery(query);
  }, []);

  const bubbleTags = useCallback((tags) => {
    setTags(
      tags.map((t) => {
        return { id: t.id, name: t.name };
      })
    );
  }, []);

  return (
    <div className="app-container container-fluid h-100">
      <div className="searchbar-container">
        <SearchBar search={search} tags={tags} />
      </div>
      <div className="cardsdisplay-container">
        <Display query={query} bubbleTags={bubbleTags} />
      </div>
    </div>
  );
}
