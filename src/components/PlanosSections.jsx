import { BoxPlanos } from "./utils/BoxPlanos";

export function PlanosSections(){
  return (
    <div className="md:px-32 px-4 py-12 space-y-12">
      <div className="text-center">
        <p className="uppercase font-medium text-lg">Lorem, ipsum.</p>
        <h2 className="font-bold text-4xl">Lorem ipsum dolor sit.</h2>
      </div>

      <BoxPlanos />
    </div>
  );
}