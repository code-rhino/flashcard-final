import React, { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../utils/api";
import Tile from "./Tile";
import { Link } from "react-router-dom";

function Tiles() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(listDecks).then(setDecks).catch(console.error);
    }
  }

  const list = decks.map((deck) => (
    <Tile key={deck.id} deck={deck} onDelete={deleteHandler} />
  ));

  return (
    <main className="container">
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <section className="row">{list}</section>
    </main>
  );
}

export default Tiles;
