'use client' // importante para usar a getRecipe();
import { recipeCard } from "@/components/recipeCard";
import { header } from "@/components/header";
import { body, title } from "@/components/body";
import { getRecipe } from "@/utils/getRecipe";

export default async function Home() {
    const recipe = await getRecipe();

    return (
        <main>
            {header()}

            {title(recipe.name)}

            {body(
                <>
                    {recipeCard("/recipes/coxinha.png", "Coxinha de grão-de-bico com palmito", "1")}
                    {recipeCard("/recipes/gnocchi.png", "Gnocchi com ragu de cogumelos e crispy de alho-poró", "2")}
                    {recipeCard("/recipes/ravioli.png", "Ravióli ao creme de palmito", "3")}
                </>
            )}
        </main>
    );
}