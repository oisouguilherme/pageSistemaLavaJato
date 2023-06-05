export function FormSections(){
  return(
    <div className="text-center flex flex-col items-center md:px-32 px-4 py-12 space-y-8">
      <h2 className="font-bold text-4xl">Entre em contato</h2>
      <form className="flex flex-col w-full sm:w-[600px] space-y-4">
        <input type="text" className="py-3 px-4 rounded-2xl" placeholder="Nome"/>
        <input type="text" className="py-3 px-4 rounded-2xl" placeholder="Telefone"/>
        <textarea rows="5" className="py-3 px-4 rounded-2xl" placeholder="Digite sua mensagem"></textarea>

        <button className="bg-purple-500 hover:bg-purple-600 duration-300 py-3 rounded-2xl font-bold text-lg text-white">ENVIAR</button>
      </form>
    </div>
  )
}