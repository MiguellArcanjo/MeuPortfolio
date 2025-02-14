import Image from "next/image"
import "./Introduction.css"
import { ButtonForLeft, ButtonForRight } from "../Button/button"

export function Introduciton() {
    return (
        <section className="container-Introduction">
            <div className="containerTop">
                <div className="containerLeft">
                    <h1>Olá, Seja bem - vindo ao</h1>
                    <h1>meu <span className="highlight-text">Portfólio</span>. {"< / >"} </h1>
                    <p>Miguel Arcanjo - Dev Front-End</p>
                    <div className="containerButtonsIntroduction">
                        <ButtonForRight />
                        <ButtonForLeft />
                    </div>
                </div>

                <div className="containerRight">
                    <Image src="/myPicture.svg" alt="My Picture" height={400} width={400}/>
                </div>
            </div>
            <div className="containerBottom"> 
                <Image src="/arrowIcon.svg" alt="Icon arrow" height={50} width={50}/>
            </div>
        </section>
    )
}