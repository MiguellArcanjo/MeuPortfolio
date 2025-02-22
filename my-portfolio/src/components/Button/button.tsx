import { useTheme } from "@/Context/ThemeContext.js"
import "./button.css"

export function ButtonForRight() {
    const { isDarkMode } = useTheme();

    return (
        <div className={isDarkMode ? "dark-modeContainerButton" : "containerButton"}>
            <div className="bgButton">
                <span className={isDarkMode ? "dark-modeleft" : "left"}></span>
                <span className={isDarkMode ? "dark-modeTop" : "top"}></span>
                <span className={isDarkMode ? "dark-modeBottom" : "bottom"}></span>
                <span className={isDarkMode ? "dark-modeRight" : "right"}></span>
                <p>Entre em Contato</p>
            </div>
        </div>
    )
}

export function ButtonForLeft() {
    const { isDarkMode } = useTheme();

    return (
        <div className={isDarkMode ? "dark-modeContainerButtonForLeft" : "containerButtonForLeft"} >
            <div className="bgButton">
                <span className={isDarkMode ? "dark-modeleftForLeft" : "leftFforLeft"}></span>
                <span className={isDarkMode ? "dark-modeTopForLeft" : "topForLeft"}></span>
                <span className={isDarkMode ? "dark-modeBottomForLeft" : "bottomForLeft"}></span>
                <span className={isDarkMode ? "dark-modeRightForLeft" : "rightForLeft"}></span>
                <p>Baixe Meu currículo</p>
            </div>
        </div>
    )
}