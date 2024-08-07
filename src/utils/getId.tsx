'use client'
import { useSearchParams } from "next/navigation"

export const getId = () => {
    const searchParams = useSearchParams();
    const parameters = searchParams.get('id');

    return parameters
}