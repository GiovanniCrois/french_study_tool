import Link from "next/link";
export default function SelectPanel() {
  return (
    <div className="w-full mt-8 grid grid-cols-1 gap-8 justify-items-center content-around lg:grid-cols-3">
      <Link
        className="w-3/4 md:w-1/2 lg:w-3/4 font-Rammetto h-[8rem] lg:h-[16rem] px-3 py-4 text-4xl md:text-5xl lg:text-6xl  font-extrabold text-pBlue text-center content-center cursor-pointer border-solid border-2 border-pBlue rounded-2xl border-b-10 active:border-b-2"
        href={"/verbsPractice"}
      >
        Les verbes
      </Link>
      <Link
        className="w-3/4 md:w-1/2 lg:w-3/4 font-Rammetto h-[8rem] lg:h-[16rem] text-4xl md:text-5xl lg:text-6xl content-center text-center font-extrabold text-neutral-400 cursor-pointer border-solid border-2 border-neutral-400 bg-neutral-200 rounded-2xl border-b-10 active:border-b-2"
        href={"#"}
      >
        à venir
      </Link>
      <Link
        className="w-3/4 md:w-1/2 lg:w-3/4 font-Rammetto h-[8rem] lg:h-[16rem] text-4xl md:text-5xl lg:text-6xl content-center text-center font-extrabold text-neutral-400 cursor-pointer border-solid border-2 border-neutral-400 bg-neutral-200 rounded-2xl border-b-10  active:border-b-2"
        href={"#"}
      >
        à venir
      </Link>
    </div>
  );
}
