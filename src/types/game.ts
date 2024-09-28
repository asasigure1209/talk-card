export type card = {
  id: number;
  name: string;
};

export type deck = {
  id: number;
  name: string;
  cards: card[];
};
