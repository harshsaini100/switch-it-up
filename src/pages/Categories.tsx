import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import type { ApiResponse } from "../types";
import { useTheme } from "../contexts/ThemeContext";

//fetch categories
const fetchCategories = async () : Promise<{status: boolean, data?: string[]}> => {
    try{
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await res.json();
        return {
            status: true,
            data: categories
        }
    }catch(e){
        return {
            status: false
        }
    }
}
export default function Category(){

    const {theme} = useTheme();

    const [categories, setCategories] = useState<string[]>([]);
    const [error,setError] = useState<null | string>(null);

    //for fetching categories and setting categories on mount
    useEffect(() => {
        fetchCategories().then((data : ApiResponse) => {
            //if status is true them set categories else set error
            if(data.status){
                setCategories(data.data!);
            }else{
                setError('Error fetching categories');
            }
        })            
    },[])

    if(error){
        return(
            <div className="categories">
                <h1 className="text-center text-2xl font-bold m-6">{error}</h1>
            </div>
        )
    }

    return(
        <div className="categories flex flex-col">
            <h1 className="text-center text-2xl font-bold m-6">Explore Out Categories</h1>
            <p className="max-w-screen-lg mx-auto text-center m-5 w-2xs">Discover a wide range of products grouped by category. Find what you're looking for quickly and easily—from electronics to fashion and more.</p>
            <div className={`  ${theme == "theme3" ? 'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : 'flex flex-col'} gap-4 max-w-screen-lg mx-auto cursor-pointer`}>

                {categories.map((category,i) => (
                    <Link key={i} to={`/category/${category}`}>
                        <div 
                        key={i}
                         className={`${theme == "theme3" ? 'card hover:scale-125 hover:bg-indigo-600' : 'hover:bg-amber-100 min-w-2xs hover:text-black'} capitalize underline shadow-gray-600 shadow-md rounded-lg p-2.5 flex justify-center items-center text-center flex-col`}
                        >
                            {category}
                        </div>
                     </Link>
            ))}
            </div>
        </div>
    )
}