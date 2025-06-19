"use-client";
import { useState } from "react";
export default function OptionButton({ option, onClick, isCorrect }) {
  const variants = {
    base: "w-full font-Rammetto h-fit p-4 font-mono font-extrabold text-xl text-center rounded-bl-xl rounded-tr-xl shadow-xl shadow-cyan-900/50 text-shadow-lg/30",
    primary:
      "text-blue-50 bg-linear-180 from-blue-600 to-blue-800 hover:from-cyan-700 hover:to-cyan-900 hover:text-shadow-lg/50",
    correct:
      "text-emerald-50 bg-linear-180 from-lime-500 to-lime-600 shadow-teal-900/50",
    error:
      "text-red-50 bg-linear-180 from-red-600 to-red-800 shadow-red-900/50",
  };
  const [variant, setVariant] = useState("primary");
  const handleAnswer = () => {
    isCorrect ? setVariant("correct") : setVariant("error");
    onClick(isCorrect);
    setTimeout(() => {
      setVariant("primary");
    }, 2000);
  };
  return (
    <button
      value={option}
      key={option}
      onClick={handleAnswer}
      className={variants.base + " " + variants[variant]}
    >
      {option}
    </button>
  );
}
