import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home";
import Study from "../Deck/Study";
import NotFound from "./NotFound";
import Header from "./Header";
import DeckEdit from "../Deck/Edit";
import DeckView from "../Deck/View";
import CardEdit from "../Card/Edit";
import CardCreate from "../Card/Create";
import DeckCreate from "../Deck/Create";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/decks/new" element={<DeckCreate />} />
          <Route path="/decks/:deckId/study" element={<Study />} />
          <Route path="/decks/:deckId/edit" element={<DeckEdit />} />
          <Route path="/decks/:deckId/cards/new" element={<CardCreate />} />
          <Route path="/decks/:deckId/cards/:cardId/edit" element={<CardEdit />} />
          <Route path="/decks/:deckId" element={<DeckView />} />
          <Route path="/decks" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
