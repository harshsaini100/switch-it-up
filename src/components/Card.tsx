import type { Theme } from "../contexts/ThemeContext";
import type { Product } from "../types";

export default function Card({item, theme} : {item : Product, theme: Theme}){
    return(
        <div className={`card ${theme == "theme2" ? 'border-white border-2' : 'shadow-gray-600'} shadow-md ${theme != "theme1" && 'rounded-lg'} ${theme == "theme3" ? "hover:scale-125" : "hover:bg-amber-100 hover:text-black"} p-2.5 flex justify-between items-center flex-col`}>
            <div className="p-2.5 img-container rounded-lg flex items-center justify-center">
                <img className="image object-contain max-h-full" src={item?.image} alt={item?.title ?? "product image"}/>
            </div>
            <div className="w-full min-h-2/6 overflow-ellipsis flex justify-between flex-col gap-2">
          
                <h1 className="text-center" title={item?.title}>{item?.title && item.title.length > 40 ? item.title.substring(0, 40) + "..." : item.title}</h1>
                <div className="text-center text-sm "><span className="text-white bg-green-700 p-0.5 rounded">{item.rating.rate}⭐</span> <span className="text-gray-500">({item.rating.count})</span></div>
                <p className="text-center">${item?.price}</p>
          
            </div>
        </div>
    )
}