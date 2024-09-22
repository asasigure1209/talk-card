import { useState } from "react";

type card = {
  id: number;
  name: string;
};

type deck = {
  id: number;
  name: string;
  cards: card[];
};

export const useGame = (deck: deck) => {
  const [stockPile, setStockPile] = useState(deck.cards);

  const discard = () => {
    const frontCard = stockPile[stockPile.length - 1];

    if (frontCard === undefined) throw Error("No Card");

    setStockPile(stockPile.slice(0, -1));
  };

  return { stockPile, discard };
};
