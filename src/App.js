import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import AboutUs from "./pages/AboutUs.js"
import Courses from "./pages/Courses.js"
import ContactUs from "./pages/ContactUs.js"
import NotFound from "./pages/NotFound.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
