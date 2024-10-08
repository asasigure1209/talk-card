import { createLazyFileRoute } from "@tanstack/react-router";
import Card from "../components/Card";

export const Route = createLazyFileRoute("/decks_id")({
  component: DecksId,
});

function DecksId() {
  return (
    <>
      <header>
        <div className="container mx-auto p-4 flex items-center">
          <a href="/" className="flex items-cente text-gray-600">
            &lt;一覧へ戻る
          </a>
        </div>
      </header>
      <main className="flex-1 flex">
        <div className="flex-1 flex flex-col items-center justify-center text-gray-600">
          <div className="relative">
            <h2 className="absolute w-full -top-12 text-2xl font-bold mb-4 text-center">
              トークタイム
            </h2>
            <Card />
            <p className="absolute w-full -bottom-8 text-lg font-semibold text-center">
              ▲ カードを引く ▲
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <button
            type="button"
            className="bg-blue-400 text-white rounded-md p-3 shadow-lg"
          >
            次のターンへ
          </button>
        </div>
      </main>
    </>
  );
}
