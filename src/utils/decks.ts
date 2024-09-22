export const fetchDeck = (deckId: number) => {
  return {
    id: 1,
    name: "恋愛",
    cards: ["ほげほげ", "フガフガ"],
  };
};

export const fetchDecks = () => {
  return [
    {
      id: 1,
      name: "恋愛",
      cards: ["ほげほげ", "フガフガ"],
    },
    {
      id: 2,
      name: "好きな〇〇",
      cards: [],
    },
    {
      id: 3,
      name: "同棲について",
      cards: [],
    },
    {
      id: 4,
      name: "育児について",
      cards: [],
    },
  ];
};
