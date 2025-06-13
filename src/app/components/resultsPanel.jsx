import Link from "next/link";
export default function ResultPanel({ aciertos }) {
  return (
    <>
      <h1>
        Félicitations, vous avez terminé l'exercice. Vous avez {aciertos} bonnes
        réponses :D
      </h1>
      <Link href={"/"}>
        <button className="border">Rentrer a le menu principal</button>
      </Link>
    </>
  );
}
