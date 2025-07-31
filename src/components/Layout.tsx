import { Fragment } from "react/jsx-runtime";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

export default function Layout() {
    return (
        <main className="transition-all duration-500">
            <Header/>
            <ThemeIcon/>
            <Outlet />
        </main>
    );
}