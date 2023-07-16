import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
const Header = ({ scrollToSection, aboutRef, homeRef, registrationRef, contactRef})=> {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = ref => {
        setIsOpen(false)
        scrollToSection(ref)
    }

    return(
        <nav className="w-screen bg-sky-700 text-white shadow-2xl fixed z-50">
            <div className="container px-8 py-5 flex items-center justify-between md:justify-start shadow-xl">
                <h1 className="italic text-4xl font-bold">re<span className="text-red-600">car</span>ro</h1>
                <div className="nav-links pl-7 hidden md:flex">
                    <button onClick={()=> scrollToSection(homeRef)} className="text-lg mx-3">Home</button>
                    <button onClick={()=> scrollToSection(aboutRef)} className="text-lg mx-3">About us</button>
                    <button onClick={()=> scrollToSection(registrationRef)} className="text-lg mx-3">Car List</button>
                    <button onClick={()=> scrollToSection(contactRef)} className="text-lg mx-3">Contact</button>
                </div>

                <button className="md:hidden text-white text-xl" onClick={()=> setIsOpen(prev => !prev)}>
                    {isOpen ? <GrClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Navbar on mobile */}
            <div className={`nav-container absolute md:hidden w-screen bg-sky-700 flex flex-col items-center transition duration-300 ${isOpen ? "translate-y-0" : "-translate-y-96"}`}>
                <button onClick={()=> handleClick(homeRef)} href="#" className="text-lg mx-3 py-3">Home</button>
                <button onClick={()=> handleClick(aboutRef)} href="#" className="text-lg mx-3 py-3">About us</button>
                <button onClick={()=> handleClick(registrationRef)} href="#" className="text-lg mx-3 py-3">Car List</button>
                <button onClick={()=> handleClick(contactRef)} href="#" className="text-lg mx-3 py-3">Contact</button>
            </div>
        </nav>
    )
}

export default Header