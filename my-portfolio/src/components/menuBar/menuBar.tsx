import Image from "next/image"
import "./menuBar.css"

interface LineMenuProps {
    icon: string;
    nome: string;
    href?: string;
}

const LineMenu = (props: LineMenuProps) => {
    return (
        <a href={props.href} className="lineMenu">
            <Image src={props.icon} alt="Icones do menu" height={23} width={23}/>
            {props.nome}
        </a>
    )
}

export function MenuBar() {
    return (
        <div>
            <div className="menuHeader">
                <div>
                    <Image src={"/fotoPerfilNormal.svg"} alt="Foto Perfil" height={50} width={50}/>
                </div>
                <div>   
                    <h2>Miguel Arcanjo</h2>
                    <p>Desenvolvedor Front-End</p>
                </div>
            </div>
            <ul>
                <LineMenu icon="/iconMenuSobre.svg" nome="Sobre Mim" href="#aboutMe"/>
                <LineMenu icon="/iconMenuPlay.svg" nome="Habilidades" href="#skills"/>
                <LineMenu icon="/iconMenuProjetos.svg" nome="Projetos" href="#projetos"/>
                <LineMenu icon="/iconMenuLinkedin.svg" nome="LinkedIn"/>
                <LineMenu icon="/iconMenuGithub.svg" nome="GitHub"/>
                <LineMenu icon="/iconMenuTelefone.svg" nome="Telefone"/>
                <div />
                <div className="footerMenu">
                    <Image src={"/sobreTema.svg"} alt="Icone Sobre o tem" height={23} width={23}/>
                    <p>Cor do Tema</p>
                </div>
            </ul>
        </div>
    )
}