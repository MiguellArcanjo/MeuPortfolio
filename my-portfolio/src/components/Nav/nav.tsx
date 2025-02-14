import "./nav.css";

export function Nav() {
    return (
        <nav className="navBar">
            <div className="hamburguerMenu">
                <span className="stripeTop"></span>
                <span className="stripeMid"></span>
                <span className="stripeBottom"></span>
            </div>
            <h1>Miguel Arcanjo - Dev Front-End</h1>
            <div className="buttonChangeColorBg">
                <div className="ballChangeColor"></div>
            </div>
        </nav>
    )
}