import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import {useNavigate} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';

import monthNews from '../../assets/images/news/monthNews.png';
import ya from '../../assets/images/ya.png';
import keyboard from '../../assets/images/catalog/keyboards/key1.png';

export default () => {
    const navigate = useNavigate();
    const toCatalog = () => {
        navigate('/courseWork/catalog');
    }

    const handleKeyboard = () => {
        navigate('/courseWork/catalog#keyboard1');
    }

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove={false}
            centeredSlides={true}
            navigation
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            speed={1000}
            loop={true}
            breakpoints={{
                0: {
                    autoplay: false,
                    modules: [],
                    loop: false,
                },
                800: {
                    autoplay: true,
                    modules: [Navigation, Autoplay],
                    loop: true
                }
            }}
        >
            <SwiperSlide>
                <div className="month-news">
                    <a href="https://www.playground.ru/misc/news/samsung_predstavila_pervyj_4k_oled_monitor_s_chastotoj_obnovleniya_240_gts_i_funktsiej_odyssey_3d_bez_ochkov-1760380?ysclid=m9chc2rje2642195274" target="_blank">
                        <h1 className="slider-h1">🔥 Новость месяца 🔥</h1>
                        <p className="slider-p">Samsung представила первый 4K OLED-монитор с частотой обновления 240 Гц
                            и функцией Odyssey 3D без очков</p>
                        <img className="slider-img" src={monthNews} alt="month-news"/>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="new-stuff">
                    <a onClick={handleKeyboard}>
                        <h1 className="slider-h1">Новый товар!</h1>
                        <p className="slider-p-bigger">В нашем магазине представлена клавиатура Razer Huntsman V2
                            TKL</p>
                        <img src={keyboard} alt="razer"/>
                    </a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="ya-delivery">
                    <h1 className="slider-h1">Доступная доставка!</h1>
                    <p id="delivery">Теперь вы можете заказывать товары с доставкой в любой пункт выдачи заказов Яндекс.Маркет!</p>
                    <img className="ya-img" src={ya} alt=""/>
                    <button onClick={toCatalog}>За покупками!</button>
                </div>
            </SwiperSlide>
        </Swiper>
    )
};