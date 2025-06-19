import QuestionDisplay from "./questionDisplay";
import OptionsDisplay from "./optionsDisplay";
export default function QuestionPanel({ handleAnswer, question }) {
  return (
    <>
      <div className="w-full">
        <QuestionDisplay person={question.person} verb={question.verb} />
        <OptionsDisplay
          options={question.options}
          handleAnswer={handleAnswer}
          rightAnswer={question.rightAnswer}
        />
      </div>
    </>
  );
}
