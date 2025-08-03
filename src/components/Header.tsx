//react imports

//third party imports
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

//other imports
import { useTheme, type Theme } from "../contexts/ThemeContext";

export default function Header() {
    const {theme, setTheme} = useTheme();
    return (
        <header className="shadow-md h-15 m-3 flex justify-between items-center p-2 rounded-lg">
            <div className="logo">Switch It Up</div>
            <nav>
                <ul className="flex gap-4">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}>Home</NavLink></li>
                    <li><NavLink to="/categories" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}>Categories</NavLink></li>
                    {/* <li><NavLink to="/contact_us" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-500'}>Contact Us</NavLink></li> */}
                </ul>
            </nav>
            <div className="">
                <select className="border-1 rounded p-2 cursor-pointer" value={theme} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value as Theme)}>
                    <option value={'theme1'}>Theme One</option>
                    <option value={'theme2'}>Theme Two</option>
                    <option value={'theme3'}>Theme Three</option>
                </select>
            </div>
        </header>
    )
}