import { useState } from "react"
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaPhoneAlt, FaTelegram, FaWhatsapp } from "react-icons/fa"
import Swal from "sweetalert2"

const Contact = ({contactRef})=> {

    const [emailInput, setEmailInput] = useState()
    const [messageInput, setMessageInput] = useState()

    const handleEmailChange = e => {
        setEmailInput(e.target.value)
    }
    const handleMessageChange = e => {
        setMessageInput(e.target.value)
    }

    const handleClick = ()=> {
        if(emailInput.length > 0 && messageInput.length > 0) {
            Swal.fire({
                title: "your mail has been sent",
                icon: "success"
            })
        }
    }
    return (
        <div className="w-screen bg-red-500 py-10" ref={contactRef}>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-20 mb-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.5430348818993!2d116.07604735320699!3d-8.587723296277973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf591a7f5ec7%3A0x830b122bdd101dc5!2sKota%20Mataram%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1678075951869!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="md:w-4/12 w-2/4 h-72 mb-4"></iframe>

                <div>
                    <h1 className="text-3xl mb-4">Mail us</h1>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="email" className="rounded-md px-4 py-3" />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="message" className="text-lg">Message</label>
                        <textarea onChange={handleMessageChange} name="message" id="" cols="30" rows="10" className="rounded-md px-4 py-3"></textarea>
                    </div>
                    <button onClick={handleClick} className="px-4 py-2 rounded-md bg-green-600 text-white text-lg">Submit</button>
                </div>
            </div>

            <div className="flex gap-12 flex-wrap justify-center text-3xl">
                <FaPhoneAlt className="hover:scale-150 transition duration-300" />
                <FaWhatsapp className="hover:scale-150 transition duration-300" />
                <FaInstagram className="hover:scale-150 transition duration-300" />
                <FaFacebook className="hover:scale-150 transition duration-300" />
                <FaFacebookMessenger className="hover:scale-150 transition duration-300" />
                <FaTelegram className="hover:scale-150 transition duration-300" />
            </div>
        </div>
    )
}

export default Contact