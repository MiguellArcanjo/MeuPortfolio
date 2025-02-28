import Image from "next/image"
import "./menuBar.css"

interface LineMenuProps {
    icon: string;
    nome?: string;
    href?: string;
    closeMenu: () => void;
}

interface MenuBarProps {
    closeMenu: () => void;
}


const LineMenu = (props: LineMenuProps) => {
    return (
        <a href={props.href} className="lineMenu" onClick={props.closeMenu} target="blank_">
            <Image src={props.icon} alt="Icones do menu" height={23} width={23}/>
            {props.nome}
        </a>
    )
}

export function MenuBar({ closeMenu }: MenuBarProps) {
    return (
        <div>
            <div className="menuHeaderMobile">
                <div>
                    <Image src={"/fotoPerfilNormal.svg"} alt="Foto Perfil" height={50} width={50}/>
                </div>
            </div>
            <ul className="listaMobile">
                <LineMenu icon="/iconMenuSobre.svg"  href="#aboutMe" closeMenu={closeMenu}/>
                <LineMenu icon="/iconMenuPlay.svg" href="#skills" closeMenu={closeMenu}/>
                <LineMenu icon="/iconMenuProjetos.svg" href="#projetos" closeMenu={closeMenu}/>
                <LineMenu icon="/iconMenuLinkedin.svg" closeMenu={closeMenu} href="https://www.linkedin.com/in/miguel-arcanjob/"/>
                <LineMenu icon="/iconMenuGithub.svg" closeMenu={closeMenu} href="https://github.com/MiguellArcanjo"/>
                <LineMenu icon="/iconMenuTelefone.svg" closeMenu={closeMenu}/>
            </ul>

            <div className="menuHeader">
                <div>
                    <Image src={"/fotoPerfilNormal.svg"} alt="Foto Perfil" height={50} width={50}/>
                </div>
                <div>   
                    <h2>Miguel Arcanjo</h2>
                    <p>Desenvolvedor Front-End</p>
                </div>
            </div>
            <ul className="listaDesktop">
                <LineMenu icon="/iconMenuSobre.svg" nome="Sobre Mim" href="#aboutMe" closeMenu={closeMenu}/>
                <LineMenu icon="/iconMenuPlay.svg" nome="Habilidades" href="#skills" closeMenu={closeMenu}/>
                <LineMenu icon="/iconMenuProjetos.svg" nome="Projetos" href="#projetos" closeMenu={closeMenu}/>
                <LineMenu icon="/iconMenuLinkedin.svg" nome="LinkedIn" closeMenu={closeMenu} href="https://www.linkedin.com/in/miguel-arcanjob/"/>
                <LineMenu icon="/iconMenuGithub.svg" nome="GitHub" closeMenu={closeMenu} href="https://github.com/MiguellArcanjo"/>
                <LineMenu icon="/iconMenuTelefone.svg" nome="Telefone" closeMenu={closeMenu}/>
                <div />
                <div className="footerMenu">
                    <Image src={"/sobreTema.svg"} alt="Icone Sobre o tem" height={23} width={23}/>
                    <p>Cor do Tema</p>
                </div>
            </ul>
        </div>
    )
}