import Image from "next/image"
import "./Introduction.css"
import { ButtonForLeft, ButtonForRight } from "../Button/button"
import { useTheme } from "@/Context/ThemeContext.js"

export function Introduciton() {

    const { isDarkMode } = useTheme();

    return (
        <section className={isDarkMode ? "dark-modeContainerIntroduction" : "container-Introduction"}>
            <div className="containerTop">
                <div className={isDarkMode ? "dark-modeContainerLeft" : "containerLeft"}>
                    <h1>Olá, Seja bem - vindo ao</h1>
                    <h1>meu <span className={isDarkMode ? "dark-modeHighlight-text" : "highlight-text"}>Portfólio</span>. {"< / >"} </h1>
                    <p>Miguel Arcanjo - Dev Front-End</p>
                    <div className="containerButtonsIntroduction">
                        <ButtonForRight nome="Entre em contato"/>
                        <ButtonForLeft nome="Baixe meu currículo"/>
                    </div>
                </div>

                <div className="containerRight">
                    <Image src="/myPicture.svg" alt="My Picture" height={400} width={400}/>
                </div>
            </div>
            <div className="containerBottom">
                <a href="#aboutMe">
                    <Image src="/arrowIcon.svg" alt="Icon arrow" height={50} width={50} className={isDarkMode ? "dark-modeArrow" : "arrow"}/>
                </a> 
            </div>
        </section>
    )
}