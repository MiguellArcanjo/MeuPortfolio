import { useTheme } from "@/Context/ThemeContext.js"
import { useCallback } from 'react';
import "./button.css"

interface ButtonsProps {
    nome: string;
    urlRepositorio?: string;
    urlProjeto?: string;
}

export function ButtonForRight(props: ButtonsProps) {
    const { isDarkMode } = useTheme();

    return (
        <a href="#contato" className="contatoButton">
            <div className={isDarkMode ? "dark-modeContainerButton" : "containerButton"}>
                <div className="bgButton">
                    <span className={isDarkMode ? "dark-modeleft" : "left"}></span>
                    <span className={isDarkMode ? "dark-modeTop" : "top"}></span>
                    <span className={isDarkMode ? "dark-modeBottom" : "bottom"}></span>
                    <span className={isDarkMode ? "dark-modeRight" : "right"}></span>
                    <p>{props.nome}</p>
                </div>
            </div>
        </a>
    )
}

export function ButtonForLeft(props: ButtonsProps) {
    const { isDarkMode } = useTheme();

    const handleDownload = useCallback(() => {
        const link = document.createElement('a');
        link.href = "/CV MIGUEL ARCANJO BARRETO SIQUEIRA.pdf";
        link.download = 'Miguel-Arcanjo-Curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [])

    return (
        <div className={isDarkMode ? "dark-modeContainerButtonForLeft" : "containerButtonForLeft"} onClick={handleDownload} >
            <div className="bgButton">
                <span className={isDarkMode ? "dark-modeleftForLeft" : "leftFforLeft"}></span>
                <span className={isDarkMode ? "dark-modeTopForLeft" : "topForLeft"}></span>
                <span className={isDarkMode ? "dark-modeBottomForLeft" : "bottomForLeft"}></span>
                <span className={isDarkMode ? "dark-modeRightForLeft" : "rightForLeft"}></span>
                <p>{props.nome}</p>
            </div>
        </div>
    )
}

export function ButtonForRightProject(props: ButtonsProps) {
    const { isDarkMode } = useTheme();

    return (
        <a href={props.urlRepositorio} className="" target="blank_">
            <div className="dark-modeContainerButtonOverlay">
                <div className="bgButton">
                    <span className="dark-modeleft"></span>
                    <span className="dark-modeTop"></span>
                    <span className="dark-modeBottom"></span>
                    <span className="dark-modeRight"></span>
                    <p className="nomeOverlay">{props.nome}</p>
                </div>
            </div>
        </a>
    )
}

export function ButtonForLeftProject(props: ButtonsProps) {
    const { isDarkMode } = useTheme(); 

    return (
        <a href={props.urlProjeto} target="blank_">
            <div className="OverlayContainerButtonForLeft">
                <div className="bgButton">
                    <span className="dark-modeleftForLeft"></span>
                    <span className="dark-modeTopForLeft"></span>
                    <span className="dark-modeBottomForLeft"></span>
                    <span className="dark-modeRightForLeft"></span>
                    <p>{props.nome}</p>
                </div>
            </div>
        </a>
    )
}