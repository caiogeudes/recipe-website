'use client' // importante para usar o useSearchParams;
import { useSearchParams } from "next/navigation"

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getRecipe = async () => {
    const searchParams = useSearchParams();
    const parameters = searchParams.get('id');
    const id = Number(parameters);

    try {
        const recipe = await prisma.recipes.findUnique({
            where: { id: id },
        });

        return recipe;
    } catch (error) {
        console.error('Erro ao buscar a receita:', error);
        throw error; // Opcional: lançar o erro para que possa ser tratado onde a função for chamada
    }
}