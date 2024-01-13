import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "../Form";

function CardCreate() {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitHandler(card) {
    createCard(deckId, card);
  }

  function doneHandler() {
    navigate(`/decks/${deckId}`);
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <CardForm
        deckName={deck.name}
        initialState={deck}
        onSubmit={submitHandler}
        onDone={doneHandler}
      />
    </>
  );
}

export default CardCreate;
