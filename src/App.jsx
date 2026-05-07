import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Internships from "./pages/Internships"
import Profile from "./pages/Profile"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internships" element={<Internships />} />

      </Routes>
    </>
  )
}

export default App