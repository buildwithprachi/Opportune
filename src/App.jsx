import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Internships from "./pages/Internships"
import SavedJobs from "./pages/Profile"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </>
  )
}

export default App