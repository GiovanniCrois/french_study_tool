export default function QuestionDisplay({ person, verb }) {
  const persons = {
    pps: "Je",
    sps: "Tu",
    tps: "Il / Elle",
    ppp: "Nous",
    spp: "Vous",
    tpp: "Ils / Elles",
  };
  return (
    <div className="w-full md:w-3/6 place-self-center grid grid-cols-1 mb-4 rounded-xl bg-radial from-blue-600 to-blue-800 shadow-blue-900/50">
      <div className="border p-4  text-center text-2xl text-bold rounded-t-xl font-mono font-extrabold text-xl text-center text-shadow-lg/30  ">
        <h2 className="text-yellow-50">{persons[person]}</h2>
      </div>
      <div className="border p-4  text-center text-2xl text-bold rounded-b-xl font-mono font-extrabold text-xl text-center text-shadow-lg/30 ">
        <h2 className="text-yellow-50">{verb}</h2>
      </div>
    </div>
  );
}
