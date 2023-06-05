import Image from "next/image";
import image from '../images/logo.png'

export function Header(){
  return(
    <div className="flex items-center justify-between px-32">
      <Image src={image} alt="Imagem de Teste" width={150}/>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Servicos</a>
          </li>
          <li>
            <a href="#">Historia</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}