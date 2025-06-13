"use client";
import QuestionPanel from "../components/questionPanel";
import { useState } from "react";
export default function () {
  const [success, setSuccess] = useState(0);
  const [attempts, setAttempts] = useState(3);

  const handleAttempts = (data) => {
    setAttempts(data);
  };
  return (
    <>
      <div className="flex p-2">
        {Array.from({ length: attempts }).map((_, i) => (
          <div className="rounded-full bg-red-500 size-15 flex"></div>
        ))}
      </div>

      <QuestionPanel setAttempts={handleAttempts} />
    </>
  );
}
