import React from 'react';

import news1 from '../../assets/images/news/news1.png';
import news2 from '../../assets/images/news/news2.png';
import news3 from '../../assets/images/news/news3.png';

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
                <a href="https://www.playground.ru/misc/news/western_digital_predstavlyaet_zhestkij_disk_bez_cherepichnoj_zapisi_red_pro_sata_nas_emkostyu_26_tb-1758803" target="_blank" className="news-card">
                    <div className="news-img-container">
                        <img src={news2} alt="newsImg"/>
                    </div>
                    <p>Western Digital представляет жесткий диск без черепичной записи Red Pro SATA NAS емкостью 26 ТБ</p>
                </a>
                <a href="https://www.playground.ru/misc/news/pervyj_biologicheskij_kompyuter_na_osnove_zhivyh_kletok_mozga-1757526" target="_blank" className="news-card">
                    <div className="news-img-container">
                        <img src={news3} alt="newsImg"/>
                    </div>
                    <p>Первый "биологический компьютер" на основе живых клеток мозга</p>
                </a>
            </div>
        </div>
    )
}

export default News;