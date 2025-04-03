"use client";

import { useState } from "react";
export default function QuestionPanel() {
  const question = {
    question: "Etre",
    options: ["Suis", "Es", "Est", "Sommes"],
  };

  const [variant, setVariant] = useState(
    "w-23 h-23 cursor-pointer bg-black text-white"
  );
  const handleAnswer = (e) => {
    const value = e.target.value;
    console.log(e.target.className);
    if (value == question.options[0]) {
      //setVariant("w-23 h-23 cursor-pointer bg-black text-white bg-green-500");
      e.target.className =
        "w-23 h-23 cursor-pointer bg-black text-white bg-green-500";
    } else {
      e.target.className =
        "w-23 h-23 cursor-pointer bg-black text-white bg-red-500";
    }
  };

  return (
    <>
      <div>
        {question.options.map((option) => {
          return (
            <button
              value={option}
              key={option}
              onClick={handleAnswer}
              className={variant}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}
