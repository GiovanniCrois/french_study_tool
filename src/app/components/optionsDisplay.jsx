import OptionButton from "./optionButton";
export default function ({ options, handleAnswer, rightAnswer }) {
  return (
    <div className="w-full md:w-1/2 place-self-center grid grid-cols-1 gap-2">
      {options.map((option, indx) => {
        if (option == rightAnswer) {
          return (
            <OptionButton
              option={option}
              onClick={handleAnswer}
              isCorrect={true}
              indx={indx}
            />
          );
        } else {
          return (
            <OptionButton
              option={option}
              onClick={handleAnswer}
              isCorrect={false}
            />
          );
        }
      })}
    </div>
  );
}
