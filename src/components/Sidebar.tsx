import { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
export default function Sidebar({sidebarOpen, setSidebarOpen}:{sidebarOpen:boolean, setSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
   const {theme} = useTheme();
    return (
        <aside>
            <div className="h-full w-full">
            <div className="logo-side text-center">Switch It Up</div>
            <div>
                <nav>
                    <ul className="flex flex-col gap-2 justify-center items-center p-3">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}>Home</NavLink></li>
                        <li><NavLink to="/categories" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}>Categories</NavLink></li>
                        {/* <li><NavLink to="/contact_us" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}>Contact Us</NavLink></li> */}
                    </ul>
                </nav>
            </div>
            {theme == "theme2" && <div className={`absolute z-50 opacity-25 hover:opacity-100 cursor-pointer right-0 top-1/2 box ${sidebarOpen ? 'point-right' : ""}`} onClick={() => setSidebarOpen(!sidebarOpen )}>
                <div className="triangle"></div>
            </div>}
            </div>
        </aside>
    )
}