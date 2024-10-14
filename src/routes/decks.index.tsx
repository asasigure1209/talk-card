import { createFileRoute } from "@tanstack/react-router";
import DeckItem from "../components/DeckItem";
import { fetchDecks } from "../utils/decks";
import { useEffect, useState } from "react";
import type { deck } from "../types/game";
import LogoHeader from "../components/LogoHeader";

export const Route = createFileRoute("/decks/")({
  component: DecksComponent,
});

function DecksComponent() {
  const [decks, setDecks] = useState<deck[]>([]);

  useEffect(() => {
    (async () => {
      setDecks(await fetchDecks());
    })();
  }, []);

  return (
    <>
      <LogoHeader />
      <h2 className="text-2xl font-bold mb-4 mt-16 text-center text-gray-600">
        トークテーマ一覧
      </h2>
      <main className="flex-1 px-8 py-10 flex flex-col items-center bg-white/60 rounded-t-3xl">
        <div className="grid grid-cols-2 gap-4">
          {decks.map((deck) => (
            <DeckItem key={deck.id} deckId={deck.id} talkTheme={deck.name} />
          ))}
          {/* <div className="p-4 flex items-center justify-center">
            <button
              type="button"
              className="text-2xl font-extrabold rounded-full w-10 h-10 shadow-md bg-white"
            >
              ＋
            </button>
          </div> */}
        </div>
      </main>
    </>
  );
}
