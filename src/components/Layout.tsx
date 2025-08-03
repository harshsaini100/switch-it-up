import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";
import Sidebar from "./Sidebar";

export default function Layout() {
    
    const {theme} = useTheme();
    const [sidebarOpen,setSidebarOpen] = useState(true);

    //reset sidebar state on theme change
    useEffect(() => {
        setSidebarOpen(true);
    },[theme]);

    return (
        <main className={`transition-all duration-500 ${!sidebarOpen ? 'close' : 'open'}`}>
            <Header/>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <ThemeIcon/>
            <div className="content">
            <Outlet />
            </div>
        </main>
    );
}