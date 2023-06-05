import Image from "next/image";
import imageTeste from "../images/image.png";

export function SecondSection() {
  return (
    <div className="md:px-32 px-4 flex gap-4 flex-col-reverse lg:flex-row justify-around py-12">
      <Image src={imageTeste} alt="Imagem Teste" className="w-full lg:w-96 object-cover" />
      <div className="lg:w-1/2">
        <p className="uppercase text-lg font-medium">Lorem Ipsum</p>
        <h2 className="font-bold text-3xl">Lorem ipsum dolor sit amet</h2>
        <div className="flex flex-col xl:flex-row gap-4 mt-4">
          <div className="bg-white flex flex-col p-6 items-center text-center space-y-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>

            <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              ipsa consectetur provident aspernatur vitae minus atque earum
              fugit eveniet! Id fugit facere nam neque similique sapiente
              eveniet. Perspiciatis, possimus culpa.
            </p>
          </div>
          <div className="bg-white flex flex-col p-6 items-center text-center space-y-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>

            <p className="font-bold text-lg">Lorem, ipsum dolor.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              ipsa consectetur provident aspernatur vitae minus atque earum
              fugit eveniet! Id fugit facere nam neque similique sapiente
              eveniet. Perspiciatis, possimus culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
