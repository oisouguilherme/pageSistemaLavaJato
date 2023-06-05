import Image from "next/image";
import { BoxInformation } from "./utils/BoxInformation";
import ImageCelular from "../images/celular.png";

export function TertiarySection() {
  return (
    <div className=" md:px-32 px-4 py-12 text-center space-y-12">
      <div>
        <p className="uppercase font-medium text-lg">Lorem, ipsum.</p>
        <h2 className="font-bold text-4xl">Lorem ipsum dolor sit.</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-4">
        <div className="lg:space-y-8 flex flex-wrap mx-auto gap-8 lg:flex-col justify-center lg:justify-start">
          <BoxInformation />
          <BoxInformation />
        </div>
        <Image src={ImageCelular} className="w-80" />
        <div className="lg:space-y-8 flex flex-wrap mx-auto gap-8 lg:flex-col justify-center lg:justify-start">
          <BoxInformation />
          <BoxInformation />
        </div>
      </div>
    </div>
  );
}
