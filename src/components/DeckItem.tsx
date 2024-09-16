import { useState } from "react";

type DeckItem = {
  deckId: number;
  talkTheme: string;
};

function DeckItem({ deckId, talkTheme }: DeckItem) {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <a
      href={`/decks/${deckId}`}
      className="bg-white shadow-md rounded-lg p-4 w-40 h-56 flex items-center justify-center relative"
    >
      <span className="text-lg font-bold">{talkTheme}</span>
      <button
        onClick={() => setIsShowDetail(!isShowDetail)}
        type="button"
        className="absolute top-4 right-2 h-5 w-5 flex flex-col items-center space-y-1"
      >
        <span className="block w-1 h-1 bg-gray-500 rounded-full" />
        <span className="block w-1 h-1 bg-gray-500 rounded-full" />
        <span className="block w-1 h-1 bg-gray-500 rounded-full" />
      </button>
      {isShowDetail && (
        <div className="absolute top-2 right-7 flex flex-col text-sm bg-white shadow p-1 rounded">
          <button type="button" className="text-blue-500">
            編集
          </button>
          <button type="button" className="text-red-500 mt-1">
            削除
          </button>
        </div>
      )}
    </a>
  );
}

export default DeckItem;
