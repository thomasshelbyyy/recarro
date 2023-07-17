import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cars from "../data/cars.json"

const Slider = ({homeRef})=> {
    const carList = cars.cars
    const findCar = name => {
        return carList.find(car => car.name.toLowerCase() === name.toLowerCase())
    }
    const car1 = findCar("avanza")
    const car2 = findCar("innova")
    const car3 = findCar("innova reborn")
    const car4 = findCar("agya")
    const car5 = findCar("crv")
    
    return(
        <div className="pt-20 -z-50 w-full" ref={homeRef}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
            <SwiperSlide>
                <img src={`/assets/${car1.image}`} alt="" />
                <p className="text-center text-lg py-5">{`${car1.manufacture} ${car1.name}`}</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`/assets/${car2.image}`} alt="" />
                <p className="text-center text-lg py-5">{`${car2.manufacture} ${car2.name}`}</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`/assets/${car3.image}`} alt="" />
                <p className="text-center text-lg py-5">{`${car3.manufacture} ${car3.name}`}</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`/assets/${car4.image}`} alt="" />
                <p className="text-center text-lg py-5">{`${car4.manufacture} ${car4.name}`}</p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={`/assets/${car5.image}`} alt="" />
                <p className="text-center text-lg py-5">{`${car5.manufacture} ${car5.name}`}</p>
            </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider