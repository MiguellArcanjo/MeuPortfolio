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

            <div>
                <div>
                    <a href="" className="testeIcon">
                        <Image src={"/iconEmail.svg"} alt="Icone email" height={50} width={50}/>
                        E-mail
                    </a>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}