import Home from "./components/Home"
import Header from "./components/Header"
import Slider from "./components/Slider"
import About from "./components/About"
import Registration from "./components/Registration"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useRef, forwardRef } from "react"

const App = ()=> {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const registrationRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = ref => {
    ref.current.scrollIntoView({behaviour: "smooth"})
  }

  return(
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} registrationRef={registrationRef} contactRef={contactRef} />
      
      <Slider homeRef={homeRef} />
      <Home />
      <div className="w-screen h-8 bg-gradient-to-t from-sky-600 to-white"></div>
      <About aboutRef={aboutRef} />
      <div className="w-screen h-8 bg-gradient-to-b from-sky-600 to-white"></div>
      <Registration registrationRef={registrationRef} />
      <div className="w-screen h-8 bg-gradient-to-t from-red-500 to-white"></div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App