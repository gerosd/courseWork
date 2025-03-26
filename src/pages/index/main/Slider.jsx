import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
        >
            <SwiperSlide>
                <div>slide1</div>
            </SwiperSlide>

            <SwiperSlide>
                <div>slide2</div>
            </SwiperSlide>

            <SwiperSlide>
                <div>slide2</div>
            </SwiperSlide>
        </Swiper>
    )
};