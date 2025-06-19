import LinkButton from "./linkButton";
export default function SelectPanel() {
  return (
    <div className="w-full grid grid-cols-1 gap-8 justify-items-center content-around">
      <LinkButton href={"/normale"} children={"Normale"} variant={"primary"} />
      <LinkButton
        href={"/normale"}
        children={"Contre le temps"}
        variant={"primary"}
      />
      <LinkButton href={"/infini"} children={"Infini"} variant={"disabled"} />
    </div>
  );
}
