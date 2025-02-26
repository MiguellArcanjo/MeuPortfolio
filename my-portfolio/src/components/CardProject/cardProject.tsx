import Image from "next/image";
import { useTheme } from "@/Context/ThemeContext.js"
import "./cardProject.css";

interface CardProjectProps {
    nome: string;
    imgBackGround: string;
    icon1?: string;
    icon2?: string;
    icon3?: string;
    icon4?: string;
}

export function CardProject(props: CardProjectProps) {
    const { isDarkMode } = useTheme();

    return (
        <div className={`cardProject ${props.imgBackGround}`}>
            <div className="icons">
                <div>
                    {props.icon1 ? 
                        <Image src={props.icon1 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }

                    {props.icon2 ? 
                        <Image src={props.icon2 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }

                    {props.icon3 ? 
                        <Image src={props.icon3 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }

                    {props.icon4 ? 
                        <Image src={props.icon4 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }
                </div>
                <div>
                    <h3>{props.nome}</h3>
                </div>
            </div>
            <div className={`${isDarkMode ? "dark-modeOverlayHover" : "overlayHover"}`}>
                <div>25 de Abril / 2024</div>
                <div className="verMais">
                    Ver mais
                    <Image src={isDarkMode ? "/iconMenuPlay.svg" : "/playIcon.svg"} alt="Icone de play" height={20} width={20}/>
                </div>
            </div>
        </div>
    );
}
