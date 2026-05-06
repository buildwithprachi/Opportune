import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Opportune</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/saved">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar