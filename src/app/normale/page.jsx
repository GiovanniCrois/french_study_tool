"use client";
import { verbs } from "../../../public/data/verbos";
import HealthBar from "../components/healthBar";
import LoadingSpinner from "../components/loadingSpinner";
import QuestionPanel from "../components/questionPanel";
import ResultPanel from "../components/resultsPanel";
import { useState, useEffect } from "react";
export default function () {
  const totalQuestions = 10;
  const [verbos, setVerbos] = useState(verbs);
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);

  const loadQuestions = async () => {
    const questions = [];
    for (let i = 0; i < totalQuestions; i++) {
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
    loadQuestions();
    setLoading(false);
  }, []);

  const totalHealth = 3;
  const [attempts, setAttempts] = useState(totalHealth);

  const [success, setSuccess] = useState(0);

  const [questionIndx, setQuestionIndx] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (attempts == 0) {
      setIsFinish(true);
    }
  }, [attempts]);
  const handleAttempts = (data) => {
    setAttempts(data);
  };

  const handleSuccess = (data) => {
    setSuccess(data);
  };

  const handleTermination = (data) => {
    setIsFinish(data);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setSuccess((prev) => prev + 1);
      setTimeout(() => {
        if (questionIndx == totalQuestions - 1) {
          setIsFinish(true);
        } else {
          setQuestionIndx(questionIndx + 1);
        }
      }, 2000);
    } else {
      setAttempts((prev) => prev - 1);
      setTimeout(() => {
        if (questionIndx == totalQuestions - 1) {
          setIsFinish(true);
        } else {
          setQuestionIndx(questionIndx + 1);
        }
      }, 2000);
    }
  };
  if (loading) return <LoadingSpinner />;
  else {
    return (
      <>
        {!isFinish ? (
          <>
            <HealthBar attempts={attempts} totalHealth={totalHealth} />
            <QuestionPanel
              setAttempts={handleAttempts}
              setSuccess={handleSuccess}
              setIsFinish={handleTermination}
              question={questions[questionIndx]}
              handleAnswer={handleAnswer}
            />
          </>
        ) : (
          <ResultPanel aciertos={success} />
        )}
      </>
    );
  }
}
