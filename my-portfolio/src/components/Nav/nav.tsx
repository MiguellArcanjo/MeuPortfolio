import { useState } from "react";
import { useTheme } from "@/Context/ThemeContext.js";
import "./nav.css";

export function Nav() {
    const { isDarkMode, toggleTheme} = useTheme();

    return (
        <nav className={`navBar ${isDarkMode ? "dark-modeNav" : ""}`}>
            <div className="hamburguerMenu">
                <span className={`stripeTop ${isDarkMode ? "dark-modestripeTop" : ""}`}></span>
                <span className={`stripeMid ${isDarkMode ? "dark-modeStripeMidstripeMid" : ""}`}></span>
                <span className={`stripeBottom ${isDarkMode ? "dark-modeStripeBottom" : ""}`}></span>
            </div>
            <h1 className={`${isDarkMode ? "dark-modeTitle" : ""}`}>Miguel Arcanjo - Dev Front-End</h1>
            <div  className={`buttonChangeColorBg ${isDarkMode ? "dark-modeButton" : ""}`} onClick={toggleTheme}>
                <div className={`ballChangeColor ${isDarkMode ? "dark-mode" : ""}`}></div>
            </div>
        </nav>
    )
}