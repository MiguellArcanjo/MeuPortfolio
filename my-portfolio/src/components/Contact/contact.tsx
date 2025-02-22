import Image from "next/image";
import "./contact.css";

export function Contact() {
    return (
        <section className="container-contact">
            <div className="titleContact">
                <h2>Contatos <span className="lineContact"></span></h2>
                <div className="squareWhite"></div>
                <div className="squareWhite"></div>
            </div>

            <div className="containerContacts">
                <div>
                    <a href="" className="testeIcon">
                        <Image src={"/iconEmail.svg"} alt="Icone email" height={100} width={100}/>
                        E-mail
                    </a>
                </div>
                <div>
                    <a href="https://github.com/MiguellArcanjo" className="testeIcon">
                        <Image src={"/iconGithub.svg"} alt="Icone email" height={100} width={100}/>
                        E-mail
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/miguel-arcanjob/" className="testeIcon">
                        <Image src={"/iconLinkedin.svg"} alt="Icone email" height={100} width={100}/>
                        E-mail
                    </a>
                </div>
                <div>
                    <a href="" className="testeIcon">
                        <Image src={"/iconContato.svg"} alt="Icone email" height={100} width={100}/>
                        E-mail
                    </a>
                </div>
            </div>
        </section>
    )
}