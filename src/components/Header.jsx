import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
        <Link className="site-logo" to="/">My learning journal</Link>
        <nav>
            <NavLink
                to="/"
                style={({ isActive }) => isActive ? activeStyles : null}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                style={({ isActive }) => isActive ? activeStyles : null}
            >
                About Me
            </NavLink>
            <NavLink
                to="/contacts"
                style={({ isActive }) => isActive ? activeStyles : null}
            >
                Contacts
            </NavLink>
        </nav>
    </header>
    )
}