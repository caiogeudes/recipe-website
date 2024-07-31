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
          <div className="rounded bg-white size-72 shadow-lg"></div>
          <div className="rounded bg-white size-72 shadow-lg"></div>
          <div className="rounded bg-white size-72 shadow-lg"></div>
          <div className="rounded bg-white size-72 shadow-lg"></div>
          <div className="rounded bg-white size-72 shadow-lg"></div>
          <div className="rounded bg-white size-72 shadow-lg"></div>
        </div>
      </div>

      {/* Fim da página */}
      <div className="pt-10"></div>

    </main>
  );
}