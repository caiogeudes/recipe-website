export function recipeCard(img: string, title: string, id: string) {
    return (
        <div className="rounded bg-white size-72 shadow-lg text-center flex flex-col items-center">
            <a href={`http://localhost:3000/recipe?id=${id}`} className="bg-lime-700 text-white pl-8 pr-8 pt-1 pb-1 rounded-b-lg">Acessar</a>
            <img src={img} className="flex justify-center pt-5 size-44 w-full pr-3 pl-3"></img>
            <h1 className="pt-2">{title}</h1>
        </div>
    )
}