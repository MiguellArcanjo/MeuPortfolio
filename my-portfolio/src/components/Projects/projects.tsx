import AliceCarousel from "react-alice-carousel";
import { CardProject } from "../CardProject/cardProject";
import { useTheme } from "@/Context/ThemeContext.js"
import "./project.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";

export function Project() {
    const { isDarkMode } = useTheme();
    const [nameTeste, setNameTest] = useState("");

    const changeClass = () => {
        isDarkMode ? setNameTest("testeDark") : setNameTest("teste")
    }

    useEffect(() => {
        changeClass();
    }, [isDarkMode]);

    const items = [
        <CardProject 
            nome="Nome do Projeto" 
            imgBackGround={nameTeste}
            icon1="/css.svg"
            icon2="/react.svg"
            icon3="/js.svg"
        />,
        <CardProject nome="teste" imgBackGround={nameTeste}/>
      ];

    return (
        <section className={`${isDarkMode ? "dark-modeContainer-projects" : "container-projects"}`}>
            <div className="titleProject">
                <div className="squarePurple"></div>
                <div className="squarePurple"></div>
                <h2>Projetos <span className="lineProject"></span></h2>
            </div>

            <div className="projects">
                <AliceCarousel
                    items={items}
                    infinite
                    mouseTracking
                    touchTracking
                    disableButtonsControls
                />
            </div>
        </section>
    )
}