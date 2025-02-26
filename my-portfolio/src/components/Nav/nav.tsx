import { useState } from "react";
import { useTheme } from "@/Context/ThemeContext.js";
import { MenuBar } from "../menuBar/menuBar";
import "./nav.css";

export function Nav() {
    const { isDarkMode, toggleTheme} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navBar ${isDarkMode ? "dark-modeNav" : ""}`}>
            {/* Menu Hamburguer */}
            <div className="hamburguerMenu" onClick={toggleMenu}>
                <span className={`stripeTop ${isDarkMode ? "dark-modestripeTop" : ""}`}></span>
                <span className={`stripeMid ${isDarkMode ? "dark-modeStripeMid" : ""}`}></span>
                <span className={`stripeBottom ${isDarkMode ? "dark-modeStripeBottom" : ""}`}></span>
            </div>

            {/* Título */}
            <h1 className={`${isDarkMode ? "dark-modeTitle" : ""}`}>
                Miguel Arcanjo - Dev Front-End
            </h1>

            {/* Botão de Alterar Tema */}
            <div
                className={`buttonChangeColorBg ${isDarkMode ? "dark-modeButton" : ""}`}
                onClick={toggleTheme}
            >
                <div className={`ballChangeColor ${isDarkMode ? "dark-mode" : ""}`}></div>
            </div>

            {/* Menu Lateral */}
            <div className={`sideMenu ${isMenuOpen ? "open" : ""}`}>
                <MenuBar />
            </div>
        </nav>
    )
}