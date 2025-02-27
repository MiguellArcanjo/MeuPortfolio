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
            nome="Studi.io" 
            imgBackGround={nameTeste}
            icon1="/css.svg"
            icon2="/react.svg"
            icon3="/js.svg"
            urlVideo="/StudiIo.mp4"
            urlRepositorio="https://github.com/MiguellArcanjo/Studi.io"
            urlProjeto="https://studi-io.vercel.app/"
            aboutProject="Studi.io é uma aplicação interativa que permite aos usuários explorar diferentes tópicos de aprendizado, como Matemática, História, Ciências, Literatura e Tecnologia. A interface é simples e intuitiva, oferecendo prompts pré-definidos para iniciar conversas e um campo de entrada para interações personalizadas."

        />,
        <CardProject 
            nome="teste" 
            imgBackGround={nameTeste} 
            icon1="/css.svg"
            icon2="/react.svg"
            icon3="/js.svg"
            urlVideo="/StudiIo.mp4"
            aboutProject="Studi.io é uma aplicação interativa que permite aos usuários explorar diferentes tópicos de aprendizado, como Matemática, História, Ciências, Literatura e Tecnologia. A interface é simples e intuitiva, oferecendo prompts pré-definidos para iniciar conversas e um campo de entrada para interações personalizadas."
        />
      ];

    return (
        <section className={`${isDarkMode ? "dark-modeContainer-projects" : "container-projects"}`} id="projetos">
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