import Link from "next/link";
import SelectModeButton from "./selectModeButton";
export default function SelectPanel() {
  return (
    <div className="w-full grid grid-cols-1 gap-8 justify-items-center content-around">
      <SelectModeButton
        href={"/normale"}
        title={"Normale"}
        variant={"primary"}
      />
      <SelectModeButton
        href={"/normale"}
        title={"Contre le temps"}
        variant={"primary"}
      />
      <SelectModeButton
        href={"/infini"}
        title={"Infini"}
        variant={"disabled"}
      />
    </div>
  );
}
