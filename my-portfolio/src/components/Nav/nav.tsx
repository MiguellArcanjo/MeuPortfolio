import { useState } from "react";
import { useTheme } from "@/Context/ThemeContext.js";
import { MenuBar } from "../menuBar/menuBar";
import "./nav.css";

export function Nav() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div
                className={`overlay ${isMenuOpen ? "visible" : ""}`}
                onClick={toggleMenu}
            ></div>

            <nav className={`navBar ${isDarkMode ? "dark-modeNav" : ""}`}>
                <div className="hamburguerMenu" onClick={toggleMenu}>
                    <span className={`stripeTop ${isDarkMode ? "dark-modestripeTop" : ""}`}></span>
                    <span className={`stripeMid ${isDarkMode ? "dark-modeStripeMid" : ""}`}></span>
                    <span className={`stripeBottom ${isDarkMode ? "dark-modeStripeBottom" : ""}`}></span>
                </div>

                <h1 className={`${isDarkMode ? "dark-modeTitle" : "titleNav"}`}>
                    Miguel Arcanjo - Dev Front-End
                </h1>

                <div
                    className={`buttonChangeColorBg ${isDarkMode ? "dark-modeButton" : ""}`}
                    onClick={toggleTheme}
                >
                    <div className={`ballChangeColor ${isDarkMode ? "dark-mode" : ""}`}></div>
                </div>

                <div className={`sideMenu ${isMenuOpen ? "open" : ""}`}>
                    <MenuBar closeMenu={closeMenu} />
                </div>
            </nav>
        </>
    );
}
