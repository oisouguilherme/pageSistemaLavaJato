import Image from "next/image";
import imageTeste from '../images/image.png'
import { Button } from "./utils/Button";

export function FirstSection({style, text}){
  return(
    <div className={`md:px-32 px-4 flex flex-col gap-4 lg:flex-row ${style} justify-around py-12 items-center`}>
      <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/2">
        <div>
          <p className="text-xl text-center lg:text-start font-bold uppercase">{text}</p>
          <h1 className="font-bold text-4xl text-center lg:text-start">Lorem ipsum dolor sit.</h1>
        </div>
        <p className="text-xl text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere facilis voluptas repellat non consequuntur dolorum, ipsum explicabo dolorem, a ducimus illo accusamus corrupti alias. Consequatur expedita exercitationem neque libero delectus.pti alias. Consequatur expedita exercitationem neque libero delectus.pti alias. Consequatur expedita exercitationem neque libero delectus.</p>

        <Button text={"Enviar"}/>
      </div>

      <Image src={imageTeste} alt="Imagem teste" className="xl:w-1/3 lg:w-1/2"/>
    </div>
  )
}