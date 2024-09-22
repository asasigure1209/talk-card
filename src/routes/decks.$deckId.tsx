import { createFileRoute, Link } from "@tanstack/react-router";
import Card from "../components/Card";
import { fetchDeck } from "../utils/decks";
import { useGame } from "../hooks/useGame";
import { useState } from "react";

export const Route = createFileRoute("/decks/$deckId")({
  loader: async ({ params: { deckId } }) => fetchDeck(Number.parseInt(deckId)),
  component: DecksId,
});

function DecksId() {
  const deck = Route.useLoaderData();
  const { stockPile, discard } = useGame(deck);
  const [isTalkTime, setIsTalkTime] = useState(false);
  const frontCard = stockPile[stockPile.length - 1];
  const isLastCard = stockPile.length === 1;

  return (
    <>
      <header>
        <div className="container mx-auto p-4 flex items-center">
          <Link to="/decks" className="flex items-cente text-gray-600">
            &lt;一覧へ戻る
          </Link>
        </div>
      </header>
      <main className="flex-1 flex">
        <div className="flex-1 flex flex-col items-center justify-center text-gray-600">
          <div className="relative">
            {isTalkTime && (
              <h2 className="absolute w-full -top-12 text-2xl font-bold mb-4 text-center">
                トークタイム
              </h2>
            )}
            <button type="button" onClick={() => setIsTalkTime(true)}>
              <Card
                key={frontCard.id}
                name={frontCard.name}
                isOpen={isTalkTime}
              />
            </button>

            {!isTalkTime && (
              <p className="absolute w-full -bottom-8 text-lg font-semibold text-center">
                ▲ カードを引く ▲
              </p>
            )}
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          {isLastCard ? (
            <Link
              to="/decks"
              className="bg-blue-400 text-white rounded-md p-3 shadow-lg"
            >
              終了する
            </Link>
          ) : (
            <button
              type="button"
              className="bg-blue-400 text-white rounded-md p-3 shadow-lg"
              onClick={() => {
                setIsTalkTime(false);
                discard();
              }}
            >
              次のターンへ
            </button>
          )}
        </div>
      </main>
    </>
  );
}
