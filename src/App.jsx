import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/trainers"
import Navbar from "./components/navbar/NavBar"
import NotFound from "./pages/notFound/NotFound"


export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/>}  />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/gallery" element={ <Gallery/> } />
          <Route path="/plans" element={ <Plans/> } />
          <Route path="/trainers" element={ <Trainers/> } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}