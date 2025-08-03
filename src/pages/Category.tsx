import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext";
import type { ApiResponse, Product } from "../types";
import Card from "../components/Card";
//fetch categories
const fetchCategories = async (id: string): Promise<{ status: boolean, data?: string[] }> => {
    try {
        const res = await fetch('https://fakestoreapi.com/products/category/' + id);
        const categories = await res.json();
        return {
            status: true,
            data: categories
        }
    } catch (e) {
        return {
            status: false
        }
    }
}
export default function Category() {
    const { theme } = useTheme();
    const [error, setError] = useState<null | string>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const { id }: any = useParams();
   
    //fetch and set category products on mount
    useEffect(() => {
        if (id) {
            fetchCategories(id).then((data: ApiResponse) => {
                if (data.status) {
                    setProducts(data.data as unknown as Product[]);
                } else {
                    setError('Error fetching categories');
                }
            })
        }
    }, [id])

    if (error) {
        return (
            <div className="categories">
                <h1 className="text-center text-2xl font-bold m-6">{error}</h1>
            </div>
        )
    }

    return (
        <div className="categories flex flex-col">
            <h1 className="text-center text-2xl font-bold m-6 capitalize">{id}</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-screen-lg mx-auto mb-6">
                {products.map((product, i) => (
                    <Card key={i} theme={theme} item={product} />
                ))}
            </div>
        </div>
    )
}