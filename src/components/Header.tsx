//react imports

//third party imports
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

//other imports
import { useTheme, type Theme } from "../contexts/ThemeContext";

export default function Header() {
    const {theme, setTheme} = useTheme();
    return (
        <header className="shadow-md h-15 m-3 flex justify-between items-center p-2">
            <div className="logo">Switch It Up</div>
            <nav>
                <ul className="flex gap-2">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact_us">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="">
                <select className="border-1 rounded p-2" value={theme} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value as Theme)}>
                    <option value={'theme1'}>Theme One</option>
                    <option value={'theme2'}>Theme Two</option>
                    <option value={'theme3'}>Theme Three</option>
                </select>
            </div>
        </header>
    )
}