import Image from "next/image";
import { ButtonForLeftProject, ButtonForRightProject } from "../Button/button";

import "./ProjectOverlay.css"
import { useEffect, useRef } from "react";

interface CardProjectOverlayProps {
    nome: string;
    onClick: () => void;
    aboutProject: string;
    icon1?: string;
    icon2?: string;
    icon3?: string;
    icon4?: string;
    urlVideo: string;
    urlRepositorio?: string;
    urlProjeto?: string;
}

export function ProjectOverlay(props: CardProjectOverlayProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                props.onClick();
            }
        };

        document.addEventListener('touchstart', handleTouchStart);

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, [props.onClick]);
    return (
        <>
            <div className="modal-overlayMobile" ref={overlayRef} onMouseLeave={props.onClick}>
                <button className="close-button" onClick={props.onClick}>X</button>
                <button className="close-button" onClick={props.onClick}>X</button>
                <div className="overlayEsq">
                    <div className="testetste">
                        <video
                            src={props.urlVideo}
                            width={900}
                            height={500}
                            autoPlay
                            // loop
                            muted
                        />
                    </div>
                    <div className="containerOverlayEsqBottom">
                        <div className="div1">
                            <ButtonForRightProject nome="Ver repositorio" urlRepositorio={props.urlRepositorio} />
                            <ButtonForLeftProject nome="Acessar Projeto" urlProjeto={props.urlProjeto} />
                        </div>
                    </div>
                </div>

                <div className="overlayDir">
                    <div className="divTitleProjectOverlay">
                        {props.nome}
                        <div className="squarePurple"></div>
                        <div className="squareWhite"></div>
                    </div>

                    <div className="aboutProject">
                        <p>{props.aboutProject}</p>
                    </div>

                    <div className="containerFooterProjectOverlay">
                        <p className="dateProject">25 de Abril, 2024</p>
                        <div className="colaboradores">
                            <p>Colaboradores:</p>
                            <Image src={"/fotoPerfilNormal.svg"} alt="Foto Perfil" height={50} width={50} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-overlay" onMouseLeave={props.onClick}>
                <button className="close-button" onClick={props.onClick}>X</button>
                <button className="close-button" onClick={props.onClick}>X</button>
                <div className="overlayEsq">
                    <div className="testetste">
                        <video
                            src={props.urlVideo}
                            width={900}
                            height={500}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className="containerOverlayEsqBottom">
                        <div className="div1">
                            <ButtonForRightProject nome="Ver repositorio" urlRepositorio={props.urlRepositorio}/>
                            <ButtonForLeftProject nome="Acessar Projeto" urlProjeto={props.urlProjeto}/>
                        </div>
                        
                        <div className="div2">
                            <h1 className="code">{"</>"}</h1>
                            {props.icon1 && (
                                <Image src={props.icon1} alt="Icone" height={140} width={140}  />
                            )}
                            {props.icon2 && (
                                <Image src={props.icon2} alt="Icone" height={140} width={140}  className="img2"/>
                            )}
                            {props.icon3 && (
                                <Image src={props.icon3} alt="Icone" height={140} width={140}   className="img3"/>
                            )}
                            {props.icon4 && (
                                <Image src={props.icon4} alt="Icone" height={140} width={140}  className="img4"/>
                            )}
                        </div>
                    </div>
                </div>

                <div className="overlayDir">
                    <div className="divTitleProjectOverlay">
                        {props.nome}
                        <div className="squarePurple"></div>
                        <div className="squareWhite"></div>
                    </div>

                    <div className="aboutProject">
                        <p>{props.aboutProject}</p>
                    </div>

                    <div className="containerFooterProjectOverlay">
                        <p className="dateProject">25 de Abril, 2024</p>
                        <div className="colaboradores">
                            <p>Colaboradores:</p>
                            <Image src={"/fotoPerfilNormal.svg"} alt="Foto Perfil" height={50} width={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}