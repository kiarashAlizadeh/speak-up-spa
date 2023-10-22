import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import AboutUs from "./pages/AboutUs.js"
import Courses from "./pages/Courses.js"
import ContactUs from "./pages/ContactUs.js"
import NotFound from "./pages/NotFound.js"
import SignIn from "./pages/SignIn.js"
import SignUp from "./pages/SignUp.js"
import ReesetPassword from "./pages/ResetPassword.js"
import NewPassword from "./pages/NewPassword.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ReesetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
