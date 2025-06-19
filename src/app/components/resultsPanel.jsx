import LinkButton from "./linkButton";
const resultRules = [
  {
    min: 0,
    max: 6,
    message: "Vous n'avez pas fini l'exercice. Honte a toi!",
  },
  {
    min: 7,
    max: 7,
    message: "Vous avez terminé l'exercice, pour l'instant, améliorez vous",
  },
  {
    min: 8,
    max: 9,
    message:
      "Félicitations, vous avez fini l'exercice dans un bon résultat continue comme ça",
  },
  {
    min: 10,
    max: 10,
    message:
      "Incroyable , vous avez fini l'exercice dans un resultat parfait. Vous etes le mellieur.",
  },
];

export default function ResultPanel({ aciertos }) {
  const rule = resultRules.find((r) => aciertos >= r.min && aciertos <= r.max);
  return (
    <>
      <div className="w-full h-dvh place-content-center">
        <div className="w-1/3  grid grid-cols-1 place-self-center">
          <h1 className="text-center font-Rammetto h-fit p-4 font-mono font-extrabold text-2xl text-center text-shadow-lg/30 text-blue-50">
            {rule?.message || "Something got wrong"}
          </h1>
          <LinkButton
            href={"/"}
            variant={"primary"}
            children={"Rentrer a le menu principal"}
          />
        </div>
      </div>
    </>
  );
}
