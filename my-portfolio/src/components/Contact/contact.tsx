import Image from "next/image";
import { useTheme } from "@/Context/ThemeContext.js"
import "./contact.css";

export function Contact() {
    const { isDarkMode } = useTheme();

    return (
        <section className={`${isDarkMode ? "dark-modeContainer-contact" : "container-contact"}`}>
            <div className="titleContact">
                <h2>Contatos <span className="lineContact"></span></h2>
                <div className="squareWhite"></div>
                <div className="squareWhite"></div>
            </div>

            <div className="containerContacts">
                <div>
                    <a href="" className="testeIcon">
                        {isDarkMode ? <Image src={"/emailBranco.svg"} alt="Icone email" height={100} width={100}/> :  <Image src={"/iconEmail.svg"} alt="Icone email" height={100} width={100}/>}
                        E-mail
                    </a>
                </div>
                <div>
                    <a href="https://github.com/MiguellArcanjo" className="testeIcon">
                        {isDarkMode ? <Image src={"/githubBranco.svg"} alt="Icone email" height={100} width={100}/> :  <Image src={"/iconGithub.svg"} alt="Icone email" height={100} width={100}/>}
                        GitHub
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/miguel-arcanjob/" className="testeIcon">
                        {isDarkMode ? <Image src={"/linkedinBranco.svg"} alt="Icone email" height={100} width={100}/> :  <Image src={"/iconLinkedin.svg"} alt="Icone email" height={100} width={100}/>}
                        Linkedin
                    </a>
                </div>
                <div>
                    <a href="" className="testeIcon">
                        {isDarkMode ? <Image src={"/contatoBranco.svg"} alt="Icone email" height={100} width={100}/> :  <Image src={"/iconContato.svg"} alt="Icone email" height={100} width={100}/>}
                        Contato
                    </a>
                </div>
            </div>
        </section>
    )
}