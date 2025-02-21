import Image from "next/image";
import "./cardProject.css";

interface CardProjectProps {
    nome: string;
    imgBackGround: string;
    icon1?: string;
    icon2?: string;
    icon3?: string;
    icon4?: string;
}

export function CardProject(props: CardProjectProps) {
    return (
        <div className={`cardProject ${props.imgBackGround}`}>
            <div className="icons">
                <div>
                    {props.icon1 ? 
                        <Image src={props.icon1 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }

                    {props.icon2 ? 
                        <Image src={props.icon2 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }

                    {props.icon3 ? 
                        <Image src={props.icon3 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }

                    {props.icon4 ? 
                        <Image src={props.icon4 ?? "/default-icon.png"} alt="Icone" height={140} width={140} className="svg-color"/>
                        : null
                    }
                </div>
                <div>
                    <h3>{props.nome}</h3>
                </div>
            </div>
        </div>
    );
}
