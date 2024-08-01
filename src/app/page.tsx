import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Cabeçalho */}
      <header className="bg-amber-100 shadow-md w-full flex items-center justify-between  size-32">
        <img src="/logo.png" className="pl-10 size-24 w-64" alt="logo"></img>
        <img src="/user.png" className="pr-5 flex-shrink-0 size-10 w-16" alt="perfil"></img>
      </header>

      {/* Título */}
      <h1 className="font-medium font-serif text-5xl pt-20 pl-10 pb-10">Receitas</h1>

      {/* Grid de Receitas */}
      <div className="rounded bg-amber-100 w-5/6 mx-auto flex justify-center">
        <div className="grid grid-cols-3 gap-x-64 gap-y-10 pt-10 pb-10">

          {/* Receita1 */}
          <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <button className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</button>
            <img src="/recipes/coxinha.png" className="flex justify-center pt-5 size-44 w-full pr-3 pl-3"></img>
            <h1 className="pt-2">Coxinha de grão-de-bico com palmito</h1>
          </div>

          {/* Receita2 */}
          <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <button className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</button>
            <img src="/recipes/gnocchi.png" className="flex justify-center pt-5 size-44 w-full pr-3 pl-3"></img>
            <h1 className="pt-2">Gnocchi com ragu de cogumelos e crispy de alho-poró</h1>
          </div>

          {/* Receita3 */}
          <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <button className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</button>
            <img src="/recipes/ravioli.png" className="flex justify-center pt-5 size-44 w-full pr-3 pl-3"></img>
            <h1 className="pt-2">Ravióli ao creme de palmito</h1>
          </div>

          {/* Receita4 */}
          <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <button className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</button>
          </div>

          {/* Receita5 */}
          <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <button className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</button>
          </div>

          {/* Receita6 */}
          <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <button className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</button>
          </div>

        </div>
      </div>

      {/* Fim da página */}
      <div className="pt-10"></div>

    </main>
  );
}