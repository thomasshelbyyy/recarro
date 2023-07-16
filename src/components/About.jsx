import { GiCheckMark } from "react-icons/gi"
import indonesiaMap from "../assets/indonesia-map.png"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"

const About = ({aboutRef})=> {
    return(
        <div className="w-screen bg-sky-600 text-white p-10" ref={aboutRef}>
            <div className="text-center pb-8">
                <h1 className="text-3xl font-medium">What is <span className="italic font-bold">re<span className="text-red-600">car</span>ro</span></h1>
                <p className="text-xl py-4">Welcome to Recarro - Your Trusted Car Rental Service!</p>
                <p className="text-lg">At Recarro, we are dedicated to providing the best car rental services to our customers. With a wide range of high-quality vehicles from renowned brands, we offer convenience, reliability, and comfort for your personal and business transportation needs. Our commitment extends beyond top-notch vehicles to exceptional customer service, ensuring a seamless and enjoyable rental experience. Choose Recarro for a smooth, convenient, and memorable journey.</p>
            </div>

            <div>
                <h1 className="text-3xl font-medium text-center">Why Us?</h1>
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 py-10">
                    <div className="w-full md:w-2/4">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{ delay:3000 }}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true, el:"" }}
                        >
                        <SwiperSlide><img src={step1} className="rounded-md" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={step2} className="rounded-md" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={step3} className="rounded-md" alt="" /></SwiperSlide>
                        <SwiperSlide><img src={step4} className="rounded-md" alt="" /></SwiperSlide>
                    </Swiper>
                    </div>
                    <div>
                        <h1 className="text-xl text-red-700 font-semibold">Easy Peazy</h1>
                        <p className="text-lg">You just need 3 simple step:</p>
                        <ul>
                            <li><span className="text-red-700">1. </span> Pick your favorite car</li>
                            <li><span className="text-red-700">2. </span>Choose your location and your data</li>
                            <li><span className="text-red-700">3. </span>Pay and wait for the confirmation</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="bg-white rounded-md md:w-2/4">
                        <img src={indonesiaMap} alt="Map of The Republic of Indonesia" className="rounded-md" />
                    </div>
                    <div>
                        <h1 className="text-xl text-red-700 font-semibold">widely spreaded</h1>
                        <p className="text-lg">We have extensive network in major cities in Indonesia:</p>
                        <ul>
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
            </div>
        </div>
    )
}

export default About