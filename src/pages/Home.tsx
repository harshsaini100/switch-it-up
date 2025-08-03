import { useState, useEffect } from "react";
import Card from "../components/Card";
import type { Product } from "../types";
import { useTheme } from "../contexts/ThemeContext";
import type { ApiResponse } from "../types";

async function fetchProducts(): Promise<ApiResponse> {

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        return {
            status: true,
            data: data
        }
    } catch (e) {
        return {
            status: false
        }
    }

}

export default function Home() {
    
    const { theme } = useTheme();
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<null | string>(null);

    //for fetching  and setting products on mount
    useEffect(() => {
        fetchProducts().then((data: ApiResponse) => {
            //if status is true then set products else set error
            if (data.status) {
                setProducts(data.data!);
            } else {
                setError('Error fetching categories');
            }
        })
    }, [])

    return (
        <>
            <h1 className="text-center text-2xl font-bold m-6">Featured Products</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-screen-lg mx-auto mb-6">
                {products.map((product, i) => (
                    <Card key={i} theme={theme} item={product} />
                ))}
            </div>
        </>
    )
}