import AliceCarousel from "react-alice-carousel";
import { CardProject } from "../CardProject/cardProject";
import { useTheme } from "@/Context/ThemeContext.js"
import "./project.css";
import 'react-alice-carousel/lib/alice-carousel.css';

export function Project() {
    const { isDarkMode } = useTheme();

    const items = [
        <CardProject 
            nome="Nome do Projeto" 
            imgBackGround="teste"
            icon1="/css.svg"
            icon2="/react.svg"
            icon3="/js.svg"
        />,
        <CardProject nome="teste" imgBackGround="teste"/>
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