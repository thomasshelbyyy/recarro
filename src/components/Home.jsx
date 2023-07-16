import { GiCheckMark } from "react-icons/gi"
import bgImg from "../assets/bgimg.jpg"


const Home = ()=> {
    const background = {
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% auto"
    }

    return(
        <div style={background} className="flex flex-col items-center pb-10">
                <div className="flex flex-col md:flex-row w-screen py-20 justify-center items-center gap-10 text-slate-800" >
                    <h1 className="text-4xl font-bold w-60">Discover Freedom on Every Wheel</h1>
                    <div className="px-20">
                        <h2 className="text-2xl">extensive network in major cities in Indonesia: </h2>
                        <ul className="font-bold ">
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Jakarta</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Bandung</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Semarang</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Surabaya</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Bali</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Lombok</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Medan</li>
                            <li className="flex gap-4"><GiCheckMark className="text-red-600" />Palembang</li>
                        </ul>
                    </div>
                </div>

                <a href="" className="px-3 py-2 text-2xl text-white bg-sky-700 rounded-full mx-auto">Get Started</a>
            </div>
    )
}

export default Home