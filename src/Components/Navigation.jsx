import '../assets/css/Navigation.css'

export function Navigation(props) {
    return (
        <div className="navigation-cont">
            <div className="navigation-items">
                <a href="/">Todo App</a>
            </div>
            <div className="navigation-items">
                <a href="/signin">Sign In</a>
            </div>
            <div className="navigation-items">
                <a href="/signup">Sign Up</a>
            </div>
            <div className="navigation-items">
                <a href="/about">About Us</a>
            </div>
        </div>
    )
}