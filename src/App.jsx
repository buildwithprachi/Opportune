import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SavedJobs from "./pages/SavedJobs"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedJobs />} />
      </Routes>
    </>
  )
}

export default App