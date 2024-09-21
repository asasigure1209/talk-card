import { createLazyFileRoute } from "@tanstack/react-router";
import DeckItem from "../components/DeckItem";

export const Route = createLazyFileRoute("/decks")({
  component: DecksComponent,
});

function DecksComponent() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-16 text-center text-gray-600">
        トークテーマ一覧
      </h2>
      <main className="flex-1 px-8 py-10 flex flex-col items-center bg-white/60 rounded-t-3xl">
        <div className="grid grid-cols-2 gap-4">
          <DeckItem deckId={1} talkTheme="恋愛" />
          <DeckItem deckId={2} talkTheme="すきな◯◯◯" />
          <DeckItem deckId={3} talkTheme="同棲について" />
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
