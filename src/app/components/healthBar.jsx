import HealthCounter from "./healthCounter";

export default function HealthBar({ attempts, totalHealth }) {
  const healthCounters = Array(totalHealth).fill("error");
  healthCounters.fill("correct", 0, attempts);

  return (
    <div className="flex p-2 ">
      {healthCounters.map((healthCounter, indx) => {
        return <HealthCounter key={indx} variant={healthCounter} />;
      })}
    </div>
  );
}
