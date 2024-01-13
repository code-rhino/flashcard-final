import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "../Form";

function DeckCreate() {
  const navigate = useNavigate();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      navigate(`/decks/${savedDeck.id}`)
    );
  }

  function cancel() {
    navigate(-1); // This replaces history.goBack()
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
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm onCancel={cancel} onSubmit={submitHandler} />
    </>
  );
}

export default DeckCreate;
