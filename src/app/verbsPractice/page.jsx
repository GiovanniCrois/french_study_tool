import CountDownBar from "../components/countDownBar";
import QuestionPanel from "../components/questionPanel";
export default function verbsPractice() {
  return (
    <>
      <div className="mt-12 w-3/4 flex place-self-center">
        <div className="w-full grid grid-cols-1 content-center gap-8">
          <CountDownBar />
          <QuestionPanel />
        </div>
      </div>
    </>
  );
}
