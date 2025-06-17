"use client";
import QuestionPanel from "../components/questionPanel";
import ResultPanel from "../components/resultsPanel";
import { useState, useEffect } from "react";
export default function () {
  const [success, setSuccess] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [isFinish, setIsFinish] = useState(false);
  const attemptsVariants = {
    primary: "size-15 stroke-red-800 fill-red-600",
    error: "size-15 stroke-red-800 fill-none",
  };

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
  return (
    <>
      <div className="flex p-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={
            attempts > 0 ? attemptsVariants.primary : attemptsVariants.error
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={
            attempts > 1 ? attemptsVariants.primary : attemptsVariants.error
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={
            attempts > 2 ? attemptsVariants.primary : attemptsVariants.error
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      {!isFinish ? (
        <QuestionPanel
          setAttempts={handleAttempts}
          setSuccess={handleSuccess}
          setIsFinish={handleTermination}
          totalQuestions={10}
        />
      ) : (
        <ResultPanel aciertos={success} />
      )}
    </>
  );
}
