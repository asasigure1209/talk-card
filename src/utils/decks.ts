import type { deck } from "../types/game";

export const fetchDeck = async (deckId: number) => {
  const decks = await fetchDecks();

  return decks.find((deck) => deck.id === deckId);
};

export const fetchDecks = async () => {
  const response = await fetch("/data/decks.json");
  const decks = (await response.json()) as deck[];

  return decks;
};
