import Link from "next/link";
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
      <h1>{rule?.message || "Something got wrong"}</h1>
      <Link href={"/"}>
        <button className="border">Rentrer a le menu principal</button>
      </Link>
    </>
  );
}
