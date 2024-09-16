import { useState } from "react";
import clsx from "clsx";
import mainLogo from "/img/main_logo.png";

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const frontCardClass = clsx(
    "flex items-center justify-center bg-gradient-to-bl from-amber-100 to-pink-400 shadow-lg rounded-lg transition-all absolute left-0 top-0 h-full w-full backface-hidden",
    isOpen && "rotate-y-180",
  );
  const backCardClass = clsx(
    "flex items-center justify-center shadow-lg rounded-lg transition-all bg-white absolute left-0 top-0 h-full w-full backface-hidden p-8",
    isOpen ? "rotate-y-0" : "-rotate-y-180",
  );

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className="relative w-[300px] h-[420px]"
    >
      <div className={frontCardClass}>
        <img src={mainLogo} width="182px" alt="トークカード" />
      </div>
      <div className={backCardClass}>
        <p className="font-bold text-2xl">初めて出会ったときの印象は？</p>
      </div>
    </button>
  );
}

export default Card;
