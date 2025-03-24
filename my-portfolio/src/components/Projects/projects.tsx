import AliceCarousel from "react-alice-carousel";
import { CardProject } from "../CardProject/cardProject";
import { useTheme } from "@/Context/ThemeContext.js"
import "./project.css";
import 'react-alice-carousel/lib/alice-carousel.css';

export function Project() {
    const { isDarkMode } = useTheme();

    const items = [
        <CardProject 
            nome="Studi.io" 
            imgBackGround="studi"
            icon1="/css.svg"
            icon2="/react.svg"
            icon3="/js.svg"
            urlVideo="/StudiIo.mp4"
            urlRepositorio="https://github.com/MiguellArcanjo/Studi.io"
            urlProjeto="https://studi-io.vercel.app/"
            aboutProject="Studi.io é uma aplicação interativa que permite aos usuários explorar diferentes tópicos de aprendizado, como Matemática, História, Ciências, Literatura e Tecnologia. A interface é simples e intuitiva, oferecendo prompts pré-definidos para iniciar conversas e um campo de entrada para interações personalizadas."
            data="20/02/2025"
        />,

        <CardProject 
            nome="Chat.io" 
            imgBackGround="chatio"
            icon1="/css.svg"
            icon2="/react.svg"
            icon3="/js.svg"
            urlVideo="/2025-02-07 03-57-36.mkv"
            urlRepositorio="https://github.com/MiguellArcanjo/chatEmTempoReal"
            urlProjeto=""
            aboutProject="Desenvolvi um chat em tempo real para aprimorar meus conhecimentos em Node.js, Socket.io e autenticação. Durante o processo, também explorei animações no React e aprofundei meu entendimento sobre Hooks."
            data="07/02/2025"
        />,
        
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