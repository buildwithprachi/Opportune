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
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App