import Link from "next/link";
export default function LinkButton({ href, variant, children }) {
  const variants = {
    base: "w-full font-Rammetto h-fit p-4 font-mono font-extrabold text-xl text-center text-shadow-lg/30 rounded-bl-xl rounded-tr-xl shadow-xl",
    primary:
      "text-blue-50 bg-linear-180 from-blue-600 to-blue-800 shadow-blue-900/50 hover:from-cyan-700 hover:to-cyan-900 hover:text-shadow-lg/50",
    disabled: "text-stone-700 bg-stone-500 shadow-blue-900/50",
  };
  return (
    <Link className={variants.base + " " + variants[variant]} href={href}>
      {children}
    </Link>
  );
}
