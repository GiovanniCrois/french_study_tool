"use client";
import ResultPanel from "./resultsPanel";
import { verbs } from "../../../public/data/verbos";
import { useEffect, useState } from "react";
export default function QuestionPanel({
  totalQuestions,
  setAttempts,
  attempts,
}) {
  const [verbos, setVerbos] = useState(verbs);
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const variants = {
    primary:
      "w-full font-Rammetto h-fit p-4 text-yellow-50  font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-yellow-600 to-yellow-800 rounded-bl-xl rounded-tr-xl shadow-xl shadow-amber-900/50  ",
    hover: "hover:from-yellow-700 hover:to-yellow-900 hover:text-shadow-lg/50",
    disabled:
      "w-full font-Rammetto h-fit p-4 text-xl text-center bg-gray-600 border-4 border-dashed  rounded-md border-gray-800",
  };

  useEffect(() => {
    loadQuestions();
    setLoading(false);
    setWidth(100);
  }, []);
  const persons = {
    pps: "Je",
    sps: "Tu",
    tps: "Il / Elle",
    ppp: "Nous",
    spp: "Vous",
    tpp: "Ils / Elles",
  };
  const [questionIndx, setQuestionIndx] = useState(0);
  const [width, setWidth] = useState();
  const loadQuestions = async () => {
    const questions = [];
    for (let i = 0; i < 10; i++) {
      questions.push(getQuestion());
    }
    setQuestions(questions);
  };
  const getQuestion = () => {
    let question = {
      verb: "",
      person: "",
      rightAnswer: "",
      options: [],
    };
    const verbsKeys = Object.keys(verbos);
    const maxVerbs = verbsKeys.length;
    const randIndxVerbs = Math.floor(Math.random() * maxVerbs);
    question.verb = verbsKeys[randIndxVerbs];
    const personKeys = Object.keys(verbos[verbsKeys[randIndxVerbs]]);
    const maxPersons = personKeys.length;
    const randIndxPersons = Math.floor(Math.random() * maxPersons);
    question.person = personKeys[randIndxPersons];
    question.rightAnswer = verbos[question.verb][question.person];
    const optionsIndx = [];
    while (optionsIndx.length < 4) {
      const rand = Math.floor(Math.random() * 4);
      if (optionsIndx.includes(rand) == false) {
        optionsIndx.push(rand);
      }
    }
    const options = [];
    while (options.length < 4) {
      const rand = Math.floor(Math.random() * 6);
      if (options.includes(verbos[question.verb][personKeys[rand]]) == false) {
        options.splice(rand, 0, verbos[question.verb][personKeys[rand]]);
      }
    }
    if (options.includes(question.rightAnswer) == false) {
      options.splice(Math.floor(Math.random() * 4), 1, question.rightAnswer);
    }
    question.options = options;
    return question;
  };
  useEffect(() => {
    if (width === 0) {
      if (questionIndx == totalQuestions - 1) {
        setIsFinished(true);
      } else {
        setQuestionIndx(questionIndx + 1);
        setWidth(100);
      }
    }
    const interval = setInterval(() => {
      if (isRunning) {
        setWidth((prevWidth) => {
          if (prevWidth <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevWidth - 1;
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [width]);

  const variant =
    "font-Rammetto px-2 py-1 text-2xl font-extrabold text-pBlue text-center content-center cursor-pointer border-solid border-1 border-pBlue rounded-xl border-b-4 active:border-b-2";
  const handleAnswer = (e) => {
    const value = e.target.value;
    const rightAnswer = questions[questionIndx].rightAnswer;
    console.log(
      "Respuesta correcta " + rightAnswer + " Respuesta dada " + value
    );
    if (value == rightAnswer) {
      e.target.className =
        "font-Rammetto px-2 py-1 text-2xl font-extrabold text-white bg-pBlue text-center content-center cursor-pointer border-solid border-1 border-pBlue rounded-xl border-b-4 active:border-b-2";
      setIsRunning(false);
      setSuccess(success + 1);
      setTimeout(() => {
        if (questionIndx == totalQuestions - 1) {
          setIsFinished(true);
        } else {
          setWidth(100);
          setIsRunning(true);
          setQuestionIndx(questionIndx + 1);
        }
      }, 3000);
    } else {
      setAttempts((prev) => prev - 1);
      e.target.className =
        "font-Rammetto px-2 py-1 text-2xl font-extrabold text-white bg-red-500 text-center content-center cursor-pointer border-solid border-1 border-red-500 rounded-xl border-b-4";
      e.target.disabled = true;
    }
  };
  if (!isFinished) {
    return (
      <>
        {loading ? (
          <h1>Cargando preguntas...</h1>
        ) : (
          <>
            <div className="w-full">
              <div className="w-full md:w-3/6 place-self-center grid grid-cols-1 mb-4">
                <div className="border p-4  text-center text-2xl text-bold rounded-t-xl font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-yellow-800 to-yellow-600 ">
                  <h2 className="text-yellow-50">
                    {persons[questions[questionIndx].person]}
                  </h2>
                </div>
                <div className="border p-4  text-center text-2xl text-bold rounded-b-xl font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-yellow-600 to-yellow-800">
                  <h2 className="text-yellow-50">
                    {questions[questionIndx].verb}
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/2 place-self-center grid grid-cols-1 gap-2">
                {questions[questionIndx].options.map((option) => {
                  return (
                    <button
                      value={option}
                      key={option}
                      onClick={handleAnswer}
                      className={variants.primary + variants.hover}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </>
    );
  } else return <ResultPanel aciertos={success} />;
}
