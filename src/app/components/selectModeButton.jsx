import Link from "next/link";
export default function SelectModeButton({ href, variant, title }) {
  const variants = {
    primary:
      "w-full font-Rammetto h-fit p-4 text-yellow-50  font-mono font-extrabold text-xl text-center text-shadow-lg/30 bg-linear-180 from-yellow-600 to-yellow-800 rounded-bl-xl rounded-tr-xl shadow-xl shadow-amber-900/50  ",
    hover: "hover:from-yellow-700 hover:to-yellow-900 hover:text-shadow-lg/50",
    disabled:
      "w-full font-Rammetto h-fit p-4 text-xl text-center bg-gray-600 border-4 border-dashed  rounded-md border-gray-800",
  };
  return (
    <Link className={variants[variant] + " " + variants.hover} href={href}>
      {title}
    </Link>
  );
}
