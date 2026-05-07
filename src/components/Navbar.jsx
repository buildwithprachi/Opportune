import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Opportune</h1>

      <div className="nav-links">

        <NavLink to="/home">
          Home
        </NavLink>

        <NavLink to="/internships">
          Internships
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/">
          Login
        </NavLink>

      </div>
    </nav>
  )
}

export default Navbar