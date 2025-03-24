import Image from "next/image";
import { useTheme } from "@/Context/ThemeContext.js"
import "./cardProject.css";
import { useState, useEffect } from "react";
import { ProjectOverlay } from "../ProjectOverlay/ProjectOverlay";

interface CardProjectProps {
    nome: string;
    imgBackGround: string;
    data: string;
    icon1?: string;
    icon2?: string;
    icon3?: string;
    icon4?: string;
    urlProjeto?: string;
    urlVideo: string;
    urlRepositorio?: string;
    aboutProject: string;
}

export function CardProject(props: CardProjectProps) {
    const { isDarkMode } = useTheme();
    const [ isOverlayOpen, setIsOverlayOpen ] = useState(false);
    const [nameTeste, setNameTest] = useState("");

    const handleOpenOverlay = () => {
        setIsOverlayOpen(true);
    };
    
    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };
    
    const changeClass = () => {
        isDarkMode ? setNameTest("testeDark") : setNameTest("teste")
    }

    useEffect(() => {
        changeClass();
    }, [isDarkMode]);

    return (
        <div className={`cardProject ${nameTeste} ${props.imgBackGround}`}>
            <div className="icons">
                <div>
                    {props.icon1 && (
                        <Image src={props.icon1} alt="Icone" height={140} width={140} className="svg-color" />
                    )}
                    {props.icon2 && (
                        <Image src={props.icon2} alt="Icone" height={140} width={140} className="svg-color" />
                    )}
                    {props.icon3 && (
                        <Image src={props.icon3} alt="Icone" height={140} width={140} className="svg-color" />
                    )}
                    {props.icon4 && (
                        <Image src={props.icon4} alt="Icone" height={140} width={140} className="svg-color" />
                    )}
                </div>
                <div>
                    <h3>{props.nome}</h3>
                </div>
            </div>
            <div className={`${isDarkMode ? "dark-modeOverlayHover" : "overlayHover"}`}>
                <div>{props.data}</div>
                <div className="verMais" onClick={handleOpenOverlay}>
                    Ver mais
                    <Image src={isDarkMode ? "/iconMenuPlay.svg" : "/playIcon.svg"} alt="Icone de play" height={20} width={20} />
                </div>
            </div>


            {isOverlayOpen && (
                <ProjectOverlay 
                    aboutProject={props.aboutProject}
                    urlVideo={props.urlVideo}
                    nome={props.nome}
                    onClick={handleCloseOverlay}
                    icon1={props.icon1}
                    icon2={props.icon2}
                    icon3={props.icon3}
                    urlRepositorio={props.urlRepositorio}
                    urlProjeto={props.urlProjeto}
                />
            )}
        </div>
    );
}