import Image from "next/image";
import { useTheme } from "@/Context/ThemeContext.js"
import "./skills.css";

export function Skills() {
    const { isDarkMode } = useTheme();

    return (
        <section className="container-skills" id="skills"> 
            <div className={`${isDarkMode ? "dark-modeTitleSkills" : "titleSkills"}`}>
                <h2>Habilidades <span className="lineSkills"></span></h2>
                {isDarkMode ?  (
                    <>
                        <div className="squarePurple">
                            <div className="white"></div>
                        </div>
                        <div className="squareWhite"></div>
                    </>
                )
                
                : 
                    <>
                        <div className="squarePurple"></div>
                        <div className="squareWhite">
                            <div className="purple"></div>
                            <div className="white"></div>
                        </div>
                    </>

                }
                
            </div>

            <div className={`${isDarkMode ? "dark-modeSkillsIcon" : "skillsIcon"}`}>
                <div className="icon">
                    <Image src={"/html.svg"} alt="Icone Html" height={130} width={130}/>
                    <p>HTML</p>
                </div>
                <div className="icon">
                    <Image src={"/react.svg"} alt="Icone React" height={130} width={130}/>
                    <p>React</p>
                </div>
                <div className="icon">
                    <Image src={"/js.svg"} alt="Icone JavaScript" height={130} width={130}/>
                    <p>JavaScript</p>
                </div>
                <div className="icon">
                    <Image src={"/css.svg"} alt="Icone Css" height={130} width={130}/>
                    <p>CSS</p>
                </div>
                <div className="icon">
                    <Image src={"/java.svg"} alt="Icone Java" height={130} width={130}/>
                    <p>Java</p>
                </div>
                <div className="icon">
                    <Image src={"/logo spring-boot.svg"} alt="Icone SpringBoot" height={130} width={130}/>
                    <p>Spring Boot</p>
                </div>
                <div className="icon">
                    <Image src={"/git.svg"} alt="Icone Git" height={130} width={130}/>
                    <p>Git</p>
                </div>
                <div className="icon">
                    <Image src={"/github.svg"} alt="Icone Github" height={130} width={130}/>
                    <p>GitHub</p>
                </div>
                <div className="iconPg">
                    <Image src={"/logo postgree.svg"} alt="Icone Postgres" height={130} width={130}/>
                    <p>PostgreSQL</p>
                </div>
                <div className="icon">
                    <Image src={"/agil.svg"} alt="Icone Metodologia agil" height={130} width={130}/>
                    <p>Met. Ágeis</p>
                </div>
                <div className="icon">
                    <Image src={"/ui.svg"} alt="Icone UI/UX" height={130} width={130}/>
                    <p>UI/UX</p>
                </div>
                <div className="icon">
                    <Image src={"/responsivo.svg"} alt="Icone Responsividade" height={130} width={130}/>
                    <p>Responsividade</p>
                </div>
            </div>
        </section>
    )
}