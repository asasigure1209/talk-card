import clsx from "clsx";
import logo from "/img/card_back_logo.png";

function Card({ name, isOpen }: { name: string; isOpen: boolean }) {
  const frontCardClass = clsx(
    "flex items-center justify-center bg-gradient-to-bl from-amber-100 to-pink-400 shadow-lg rounded-lg transition-all absolute left-0 top-0 h-full w-full backface-hidden",
    isOpen && "rotate-y-180",
  );
  const backCardClass = clsx(
    "flex items-center justify-center shadow-lg rounded-lg transition-all bg-white absolute left-0 top-0 h-full w-full backface-hidden p-8",
    isOpen ? "rotate-y-0" : "-rotate-y-180",
  );

  return (
    <div className="relative w-[300px] h-[420px]">
      <div className={frontCardClass}>
        <img src={logo} width="182px" alt="トークカード" />
      </div>
      <div className={backCardClass}>
        <p className="font-bold text-2xl">{name}</p>
      </div>
    </div>
  );
}

export default Card;
