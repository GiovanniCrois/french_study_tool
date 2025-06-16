"use client";
import QuestionPanel from "../components/questionPanel";
import ResultPanel from "../components/resultsPanel";
import { useState, useEffect } from "react";
export default function () {
  const [success, setSuccess] = useState(0);
  const [attempts, setAttempts] = useState(3);

  const handleAttempts = (data) => {
    setAttempts(data);
  };

  const handleSuccess = (data) => {
    setSuccess(data);
  };
  return (
    <>
      <div className="flex p-2">
        {Array.from({ length: attempts }).map((_, i) => (
          <div className="bg-red-500 size-15 [clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);]"></div>
        ))}
      </div>

      {attempts > 0 ? (
        <QuestionPanel
          setAttempts={handleAttempts}
          setSuccess={handleSuccess}
        />
      ) : (
        <ResultPanel aciertos={success} />
      )}
    </>
  );
}
