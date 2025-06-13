export default function CountDownBar({ width }) {
  return (
    <>
      <div className="w-full bg-withe h-12 border-solid border-2 border-[#E63946] rounded-full overflow-hidden">
        <div
          style={{ width: width + "%" }}
          className="bg-[#E63946] h-12 ease-in-out "
        ></div>
      </div>
    </>
  );
}
