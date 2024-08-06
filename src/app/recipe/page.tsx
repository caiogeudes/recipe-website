import { recipeCard } from "@/components/recipeCard";
import { header } from "@/components/header";
import { body, title } from "@/components/body";
import { getRecipe } from "@/utils/getRecipe";

export default async function Home() {
    const recipe = await getRecipe(1); //id 1 é apenas um valor de teste
    return (
        <main>
            {header()}


            {title(recipe.name)}

            {body(
                <>
                    {recipeCard("/recipes/coxinha.png", "Coxinha de grão-de-bico com palmito")}
                    {recipeCard("/recipes/gnocchi.png", "Gnocchi com ragu de cogumelos e crispy de alho-poró")}
                    {recipeCard("/recipes/ravioli.png", "Ravióli ao creme de palmito")}
                </>
            )}
        </main>
    );
}