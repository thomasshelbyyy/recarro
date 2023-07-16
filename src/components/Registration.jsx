import { useState, useEffect } from "react"
import carsJson from "../data/cars.json"
import validator from 'validator';
import { IoCloseCircleSharp } from "react-icons/io5"
import { FaCheckCircle } from "react-icons/fa"
import Swal from "sweetalert2";

const Registration = ({registrationRef})=> {
    const [type, setType] = useState("City Car")
    const [cars, setCars] = useState([])
    const [choosenCar, setChoosenCar] = useState(null)

    const [nameInput, setNameInput] = useState()

    const [emailInput, setEmailInput] = useState()
    const [isEmailValid, setIsEmailValid] = useState(null)

    const [phoneInput, setPhoneInput] = useState()
    const [isPhoneValid, setIsPhoneValid] = useState(null)

    const [locationInput, setLocationInput] = useState()
    const [isLocationValid, setIsLocationValid] = useState(null)

    const [startingDate, setStartingDate] = useState()
    const [isStartingDateValid, setIsStartingDateValid] = useState(null)

    const [dueDate, setDueDate] = useState()

    const [isDateValid, setIsDateValid] = useState(null)

    useEffect(()=> {
        setCars(carsJson.cars.filter(cars => cars.type === type))
    }, [type])

    console.log(startingDate, dueDate)

    const getChoosenCar = id => {
        setChoosenCar(cars.find(car => car.id === id))
    }

    const handleNameChange = event => {
        setNameInput(event.target.value)
    }

    const handleEmailChange = event => {
        setEmailInput(event.target.value)
        setIsEmailValid(validator.isEmail(event.target.value))
    }

    const handlePhoneChange = event => {
        setPhoneInput(event.target.value)
        setIsPhoneValid(validator.isMobilePhone(event.target.value, 'id-ID'))
    }

    const handleLocationInputChange = event => {
        setLocationInput(event.target.value)

        if(event.target.value === "no-place") {
            setIsLocationValid(false)
        } else {
            setIsLocationValid(true)
        }
    }

    const handleStartingDateChange = event => {
        const today = new Date()
        const userDate = new Date(event.target.value)

        setStartingDate(event.target.value)

        if(today > userDate) {
            setIsStartingDateValid(false)
        } else {
            setIsStartingDateValid(true)
        }
    }

    const handleDueDateChange = event => {
        const startingDateFormated = new Date(startingDate)
        const dueDateFormated = new Date(event.target.value)

        setDueDate(event.target.value)
        if(startingDateFormated >= dueDateFormated) {
            setIsDateValid(false)
        } else {
            setIsDateValid(true)
        }
    }

    const handleSubmit = ()=> {
        const startingDateFormat = new Date(startingDate)
        const startingDay = startingDateFormat.getDate()
        const startingMonth = startingDateFormat.toLocaleString('default', { month: 'long' });
        const startingYear = startingDateFormat.getFullYear();

        const dueDateFormat = new Date(dueDate)
        const dueDay = dueDateFormat.getDate()
        const dueMonth = dueDateFormat.toLocaleString('default', { month: 'long' });
        const dueYear = dueDateFormat.getFullYear();

        // counting the time difference
        const timeDifference = Math.abs(dueDateFormat.getTime() - startingDateFormat.getTime())

        // Calculating day difference
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

        Swal.fire({
            title: "Confirm",
            imageUrl: `/assets${choosenCar.image}`,
            html: 
                `<h1>Order Detail</h1>
                <p>Car Name: ${choosenCar.manufacture} ${choosenCar.name}</p>
                <p>Customer Name: ${nameInput}</p>
                <p>Customer City: ${locationInput}</p>
                <p>Rent Date: ${startingDay} ${startingMonth} ${startingYear} - ${dueDay} ${dueMonth} ${dueYear} </p>
                <p>Total Price: Rp.${(choosenCar.price * daysDifference).toLocaleString('en-US', options)}</p>
                `,
            showCancelButton: true,
            confirmButtonText: "Checkout",
            cancelButtonText: "Edit Order",
        }).then((result)=> {
            if(result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Your Payment success, you will recieve message soon"
                })
            }
        })
    }

    const options = {
        style: 'decimal',
        useGrouping: true,
        minimumFractionDigits: 2,
    };

    return(
        <div className="w-screen py-10" ref={registrationRef}>
            <div>
                <h1 className="text-center text-3xl text-red-600">Choose Your Favorite Car</h1>
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-8 justify-center items-center">
                    <button 
                        onClick={()=> setType("City Car")} 
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:duration-300 ${type === "City Car" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                            City Car
                    </button>
                    <button 
                        onClick={()=> setType("Minibus")} 
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:marker:before:duration-300 ${type === "Minibus" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                        Minibus
                    </button>
                    <button 
                        onClick={()=> setType("SUV")}  
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:marker:before:duration-300 ${type === "SUV" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                        SUV
                    </button>
                    <button 
                        onClick={()=> setType("Premium Car")} 
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:marker:before:duration-300 ${type === "Premium Car" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                        Premium Car
                    </button>
                    <button 
                        onClick={()=> setType("Big Capacity")}  
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:marker:before:duration-300 ${type === "Big Capacity" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                        Big Capacity
                    </button>
                    <button
                        onClick={()=> setType("Double Cabin")}  
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:marker:before:duration-300 ${type === "Double Cabin" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                        Double Cabin
                    </button>
                    <button 
                        onClick={()=> setType("Electric Car")} 
                        className={`bg-sky-900 px-4 py-2 md:rounded-md w-9/12 md:w-fit text-white relative before:absolute before:bg-red-600 before:bottom-0 before:left-0 before:h-1 before:w-full before:transition before:marker:before:duration-300 ${type === "Electric Car" ? "before:scale-x-1" : "before:scale-x-0"}`}
                    >
                        Electric Car
                    </button>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 items-center p-10">
                    {cars.length > 0 && cars.map(car => (
                        <div key={car.id} onClick={()=> getChoosenCar(car.id)} className={`transition duration-300 mb-4 cursor-pointer rounded-md ${car.type === type ? "opacity-100" : "opacity-0"} ${choosenCar&& choosenCar.id === car.id && "bg-slate-400 border border-slate-600"}`}>
                            <img src={`/assets${car.image}`} alt=""  />
                            <p className="text-center text-lg font-semibold text-slate-700">{car.manufacture} {car.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-10 gap-10 md:gap-40 justify-center items-center">
                {choosenCar && (
                    <div>
                        <h2 className="text-xl">Car Detail</h2>
                        <img src={`/assets${choosenCar.image}`} alt={choosenCar.name} />
                        <p className="text-lg">Name: {choosenCar.name}</p>
                        <p className="text-lg">Manufacture: {choosenCar.manufacture}</p>
                        <p className="text-lg">Type: {choosenCar.type}</p>
                        <p className="text-lg">Year: {choosenCar.year}</p>
                        <p className="text-lg">Price per Day: Rp.{choosenCar.price.toLocaleString("en-US", options)}</p>
                    </div>
                )}
                <div>
                    <h2 className="text-xl mb-3">Registration Form</h2>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name">Name</label>
                        <input disabled={!choosenCar} type="text" value={nameInput} onChange={handleNameChange} placeholder="Enter your name" className="px-5 py-2 rounded-md focus:outline-none border border-slate-700" />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email">Email</label>
                        <input disabled={!choosenCar} value={emailInput} onChange={handleEmailChange} type="email"  placeholder="Enter your Email" className={`px-5 py-2 border  rounded-md focus:outline-none ${isEmailValid !== null ? isEmailValid ? "border-green-600" : "border-red-600" : "border-slate-700"}`}  />
                        {isEmailValid !== null ? isEmailValid ? (
                            <FaCheckCircle className="my-2 text-green-600" />
                        ) : (
                            <p className="my-2 text-red-600 flex items-center"><IoCloseCircleSharp /> invalid email format</p>
                        ) : ""}
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="phone">Phone Number</label>
                        <input disabled={!choosenCar} value={phoneInput} onChange={handlePhoneChange} type="text" placeholder="Enter your phone number" className={`px-5 py-2 border rounded-md focus:outline-none ${isPhoneValid !== null ? isPhoneValid ? "border-green-600" : "border-red-600" : "border-slate-700"}`}  />
                        {isPhoneValid !== null ? isPhoneValid ? (
                            <FaCheckCircle className="my-2 text-green-600" />
                        ) : (
                            <p className="my-2 text-red-600 flex items-center"><IoCloseCircleSharp /> invalid phone number format</p>
                        ) : ""}
                    </div>
                    <div>
                        <select disabled={!choosenCar} name="city" id="city" value={locationInput} onChange={handleLocationInputChange} className="px-5 py-2 border rounded-md">
                            <option value="no-place">--Choose your location--</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="bandung">Bandung</option>
                            <option value="semarang">Semarang</option>
                            <option value="surabaya">Surabaya</option>
                            <option value="bali">Bali</option>
                            <option value="lombok">Lombok</option>
                            <option value="medan">Medan</option>
                            <option value="palembang">Palembang</option>
                        </select>
                        {isLocationValid !== null ? isLocationValid ? (
                            <FaCheckCircle className="my-2 text-green-600" />
                        ) : (
                            <p className="my-2 text-red-600 flex items-center"><IoCloseCircleSharp /> Choose the city first</p>
                        ) : ""}
                    </div>
                    <div>
                        <div className="flex flex-col mb-3">
                            <label htmlFor="startingDate">Starting Date</label>
                            <input disabled={!choosenCar} onChange={handleStartingDateChange} type="date" name="startingDate" />
                            {isStartingDateValid  !== null && !isStartingDateValid && (
                                <p className="my-2 text-red-600 flex items-center"><IoCloseCircleSharp /> Choose at least 1 day from today</p>
                            )}
                        </div>
                        <div className="flex flex-col mb-3">
                            <label htmlFor="dueDate">Due Date</label>
                            <input disabled={!choosenCar} onChange={handleDueDateChange} type="date" name="dueDate" />
                        </div>
                        {isDateValid !== null ? !isDateValid || !isStartingDateValid ? (
                            <p className="my-2 text-red-600 flex items-center"><IoCloseCircleSharp />Invalid date</p>
                        ) : (
                            <FaCheckCircle className="my-2 text-green-600" />
                        ) : ""}
                    </div>
                    <button onClick={handleSubmit} disabled={!nameInput || !isEmailValid || !isPhoneValid || !isStartingDateValid || !isDateValid || !isLocationValid} className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white transition duration-300 rounded-md disabled:cursor-not-allowed">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Registration