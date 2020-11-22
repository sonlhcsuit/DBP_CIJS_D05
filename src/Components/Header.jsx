import '../assets/css/Header.css'

export function Header(props) {
        return (
        <ul className="header border">
            <li className="nav-brand"><a href="#">Todo App</a></li>
            <li className="nav-items"><a href="#">About</a></li>
            <li className="nav-items"><a href="#">Sign Up</a></li>
            <li className="nav-items"><a href="#">Sign In</a></li>
        </ul>
    )
}