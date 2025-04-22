"use client";

import { useState } from "react";
export default function QuestionPanel() {
  const question = {
    question: "Etre",
    options: ["Suis", "As", "Est", "Sommes"],
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const persons = {
    fistPersonSingular: "Je",
    secondPersonSingular: "Tu",
    thirdPersonSingular: "Il / Elle",
    firstPersonPlural: "Nous",
    secondPersonPlural: "Vous",
    thirdPErsonPlural: "Ils / Elles",
  };
  const [verbs, setVerbs] = useState({
    Etre: {
      fistPersonSingular: "Suis",
      secondPersonSingular: "Es",
      thirdPersonSingular: "Est",
      firstPersonPlural: "Sommes",
      secondPersonPlural: "Etes",
      thirdPErsonPlural: "Sont",
    },
    Avoir: {
      fistPersonSingular: "J'ai",
      secondPersonSingular: "As",
      thirdPersonSingular: "A",
      firstPersonPlural: "Avons",
      secondPersonPlural: "Aves",
      thirdPErsonPlural: "Ont",
    },
  });
  const [questions, setQuestions] = useState([
    {
      persone: "fistPersonSingular",
      verb: "Etre",
    },
    {
      persone: "secondPersonSingular",
      verb: "Avoir",
    },
    {
      persone: "thirdPersonSingular",
      verb: "Finir",
    },
  ]);

  const [variant, setVariant] = useState(
    "font-Rammetto px-2 py-1 text-2xl font-extrabold text-pBlue text-center content-center cursor-pointer border-solid border-1 border-pBlue rounded-xl border-b-4 active:border-b-2"
  );
  const handleAnswer = (e) => {
    const value = e.target.value;
    const rightAnswer =
      verbs[questions[currentQuestion].verb][
        questions[currentQuestion].persone
      ];
    console.log(
      "Respuesta correcta " + rightAnswer + " Respuesta dada " + value
    );
    if (value == rightAnswer) {
      //setVariant("w-23 h-23 cursor-pointer bg-black text-white bg-green-500");
      e.target.className =
        "font-Rammetto px-2 py-1 text-2xl font-extrabold text-white bg-pBlue text-center content-center cursor-pointer border-solid border-1 border-pBlue rounded-xl border-b-4 active:border-b-2";
    } else {
      e.target.className =
        "font-Rammetto px-2 py-1 text-2xl font-extrabold text-white bg-red-500 text-center content-center cursor-pointer border-solid border-1 border-red-500 rounded-xl border-b-4 active:border-b-2";
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full md:w-3/6 place-self-center grid grid-cols-1 mb-4">
          <div className="border p-4  text-center text-2xl text-bold rounded-t-xl border-pBlue">
            <h2 className="text-pBlue">
              {persons[questions[currentQuestion].persone]}
            </h2>
          </div>
          <div className="border p-4  text-center text-2xl text-bold rounded-b-xl border-pBlue">
            <h2 className="text-pBlue">{questions[currentQuestion].verb}</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 place-self-center grid grid-cols-1 gap-2">
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
      </div>
    </>
  );
}
