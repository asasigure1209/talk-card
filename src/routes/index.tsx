import { createFileRoute, Link } from "@tanstack/react-router";
import LogoHeader from "../components/LogoHeader";
import heroImage from "/img/hero.png";
import talkPhaseImage from "/img/talk_phase.png";
import talkThemaCardsImage from "/img/talk_thema_cards.png";
import talkTimeImage from "/img/talk_time.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <LogoHeader />
      <div className="p-6">
        <section className="flex flex-col items-center mb-8">
          <img src={heroImage} alt="トークカード" />
          <p className="text-gray-600">会話は広がる。キョリは近づく</p>
        </section>
        <section className="flex justify-center">
          <Link
            to="/decks"
            className="bg-blue-400 text-white rounded-full p-3 shadow-lg my-8"
          >
            トークカードで遊んでみる
          </Link>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold text-center mb-2 text-gray-600">
            トークカードとは？
          </h2>
          <p className="bg-white/60 rounded-2xl p-6 text-gray-600">
            トークカードは、会話広がる二人向けカードゲームです。
            恋愛・仕事・家族など普段はあまり話さないことを二人で話し合い、価値観を共有し、
            二人の心のキョリが近づく手助けになるように願いを込めて作成しました。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-center mb-2 text-gray-600">
            遊び方
          </h2>
          <div className="bg-white/60 rounded-2xl p-10 text-gray-600 text-lg font-bold">
            <div className="mb-6 flex flex-col gap-2 items-center">
              <p className="">1. トークテーマを選ぶ</p>
              <img
                src={talkThemaCardsImage}
                width={254}
                alt="トークテーマが書かれたカード"
              />
            </div>
            <div className="mb-6 flex flex-col gap-2 items-center">
              <p>2. カードを引く</p>
              <img src={talkPhaseImage} width={92} alt="表向きにされたカード" />
            </div>
            <div className="mb-6 flex flex-col gap-2 items-center">
              <p>3. お題について話す</p>
              <img src={talkTimeImage} width={116} alt="トークタイム" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
