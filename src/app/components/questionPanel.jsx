"use client";
import ResultPanel from "./resultsPanel";
import { verbs } from "../../../public/data/verbos";
import { useEffect, useState } from "react";
export default function QuestionPanel({
  totalQuestions,
  setAttempts,
  setSuccess,
  attempts,
}) {
  const [verbos, setVerbos] = useState(verbs);
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const variants = {
    primary:
      "w-full font-Rammetto h-fit p-4 text-blue-50  font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-blue-600 to-blue-800 rounded-bl-xl rounded-tr-xl shadow-xl shadow-cyan-900/50  ",
    hover: "hover:from-cyan-700 hover:to-cyan-900 hover:text-shadow-lg/50",
    correct:
      "w-full font-Rammetto h-fit p-4 text-emerald-50 font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-lime-500 to-lime-600 rounded-bl-xl rounded-tr-xl shadow-xl shadow-teal-900/50",
    error:
      "w-full font-Rammetto h-fit p-4 text-red-50 font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-red-600 to-red-800 rounded-bl-xl rounded-tr-xl shadow-xl shadow-red-900/50",
    disabled:
      "w-full font-Rammetto h-fit p-4 text-xl text-center bg-gray-600 border-4 border-dashed  rounded-md border-gray-800",
  };

  useEffect(() => {
    loadQuestions();
    setLoading(false);
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

  const handleAnswer = (e) => {
    const value = e.target.value;
    const rightAnswer = questions[questionIndx].rightAnswer;
    if (value == rightAnswer) {
      e.target.className = variants.correct;
      setSuccess((prev) => prev + 1);
      setTimeout(() => {
        if (questionIndx == totalQuestions - 1) {
          setIsFinished(true);
        } else {
          setQuestionIndx(questionIndx + 1);
        }
      }, 2000);
    } else {
      setAttempts((prev) => prev - 1);
      if (attempts == 0) {
        setIsFinished(true);
      }
      e.target.className = variants.error;
      e.target.disabled = true;
      setTimeout(() => {
        if (questionIndx == totalQuestions - 1) {
          setIsFinished(true);
        } else {
          setQuestionIndx(questionIndx + 1);
        }
      }, 2000);
    }
  };

  return (
    <>
      {loading ? (
        <h1>Cargando preguntas...</h1>
      ) : (
        <>
          <div className="w-full">
            <div className="w-full md:w-3/6 place-self-center grid grid-cols-1 mb-4">
              <div className="border p-4  text-center text-2xl text-bold rounded-t-xl font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-blue-800 to-blue-600 ">
                <h2 className="text-yellow-50">
                  {persons[questions[questionIndx].person]}
                </h2>
              </div>
              <div className="border p-4  text-center text-2xl text-bold rounded-b-xl font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-blue-600 to-blue-800">
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
}
