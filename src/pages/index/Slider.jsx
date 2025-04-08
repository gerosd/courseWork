import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            speed={1000}
            loop={true}
        >
            <SwiperSlide>
                <div>slide1</div>
            </SwiperSlide>

            <SwiperSlide>
                <div>slide2</div>
            </SwiperSlide>

            <SwiperSlide>
                <div>slide3</div>
            </SwiperSlide>
        </Swiper>
    )
};