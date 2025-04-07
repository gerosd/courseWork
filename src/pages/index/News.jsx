import React from 'react';

import news1 from '../../assets/images/news/news1.png';

function News() {
    return (
        <div className="news section">
            <h1>Новости</h1>
            <div className="news-cards">
                <a href="https://www.playground.ru/misc/news/chestnost_nvidia_proizvoditel_nakrutil_testy_rtx_5090_i_obmanul_polzovatelej-1745323" target="_blank" className="news-card">
                    <div className="news-img-container">
                        <img src={news1} alt="newsImg"/>
                    </div>
                    <p>Честность Nvidia: производитель накрутил тесты RTX 5090 и обманул пользователей</p>
                </a>
                <a href="https://www.playground.ru/misc/news/chestnost_nvidia_proizvoditel_nakrutil_testy_rtx_5090_i_obmanul_polzovatelej-1745323" target="_blank" className="news-card">
                    <div className="news-img-container">
                        <img src={news1} alt="newsImg"/>
                    </div>
                    <p>Честность Nvidia: производитель накрутил тесты RTX 5090 и обманул пользователей</p>
                </a>
                <a href="https://www.playground.ru/misc/news/chestnost_nvidia_proizvoditel_nakrutil_testy_rtx_5090_i_obmanul_polzovatelej-1745323" target="_blank" className="news-card">
                    <div className="news-img-container">
                        <img src={news1} alt="newsImg"/>
                    </div>
                    <p>Честность Nvidia: производитель накрутил тесты RTX 5090 и обманул пользователей</p>
                </a>
            </div>
        </div>
    )
}

export default News;