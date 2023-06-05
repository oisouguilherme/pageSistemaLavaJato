import Image from "next/image";
import Notebook from '../images/notebook.png'
import { Button } from "./utils/Button";
export function FourthSections(){
  return(
    <div className="md:px-32 px-4 py-12 space-y-12 flex flex-col items-center">
      <Image className="lg:w-1/2" src={Notebook} alt="Imagem Teste"/>
      <div className="space-y-6 flex flex-wrap justify-center gap-8">
        <div className="bg-white sm:w-96 h-40 px-3 py-4 rounded-xl text-center flex flex-col justify-center">
          <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet dolorem. Voluptatibus natus nulla aliquam.</p>
        </div>
        <div className="bg-white sm:w-96 h-40 px-3 py-4 rounded-xl text-center flex flex-col justify-center">
          <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, eveniet dolorem. Voluptatibus natus nulla aliquam.</p>
        </div>
      </div>
      <Button text={"Enviar"}/>
    </div>
  )
}