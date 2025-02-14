import "./button.css"

export function ButtonForRight() {
    return (
        <div className="containerButton">
            <div className="bgButton">
                <span className="left"></span>
                <span className="top"></span>
                <span className="bottom"></span>
                <span className="right"></span>
                <p>Entre em Contato</p>
            </div>
        </div>
    )
}

export function ButtonForLeft() {
    return (
        <div className="containerButtonForLeft">
            <div className="bgButton">
                <span className="leftFforLeft"></span>
                <span className="topForLeft"></span>
                <span className="bottomForLeft"></span>
                <span className="rightForLeft"></span>
                <p>Baixe Meu currículo</p>
            </div>
        </div>
    )
}