import { useTheme } from "@/Context/ThemeContext.js"
import "./aboutMe.css";

export function AboutMe() {
    const { isDarkMode } = useTheme();

    return (
        <section className="container-AboutMe" id="aboutMe">
            <br />
            <br />
            <div className={`${isDarkMode ? "dark-modeTitleAboutMe" : "titleAboutMe"}`}>
                <div className={`${isDarkMode ? "dark-modeSquareWhite" : "squareWhite"}`}></div>
                <div className={`${isDarkMode ? "dark-modeSquarePurple" : "squarePurple"}`}></div>
                <h2>Sobre mim <span className="lineAboutMe"></span></h2>
            </div>
            <div className={`${isDarkMode ? "dark-modeParagrafoAboutMe" : "paragrafoAboutMe"}`}>
                <p>Profissional em desenvolvimento web com experiência em Front-End, especializado em tecnologias como  JavaScript, React, HTML e CSS.   Participou ativamente da criação de sistemas web responsivos, otimizando o desempenho e a experiência do usuário.  Possui conhecimento em Back-End, utilizando Java e Spring Boot, permitindo uma integração eficiente entre as camadas  da aplicação. Demonstrou habilidade em trabalho em equipe e resolução de problemas ao atuar em projetos  acadêmicos e profissionais.</p>
            </div>
            <div></div>
        </section>
    )
}