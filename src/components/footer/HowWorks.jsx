import React, {useEffect, useState} from 'react';
import "../../assets/css/howWorks.css";

import close64 from "../../assets/images/close64.png";
import home from "../../assets/images/home.png";
import worksArrow from "../../assets/images/works_arrow.svg";
import create from "../../assets/images/create.png";
import sborka from "../../assets/images/sborka.png";
import delivery from "../../assets/images/delivery.png";

function HowWorks( {onClose} ) {
    const [showForm] = useState(true);

    useEffect(() => {
        if (showForm) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        }
    },[onClose, showForm]);

    const handleContainerClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return(
        <div className="how-works back-container" onClick={handleContainerClick}>
            <div className="works-inner">
                <div className="close-form" id="bigger-close" onClick={onClose}>
                    <img src={close64} alt="close"/>
                </div>
                <h1>Как мы работаем?</h1>
                <div className="many-icons">
                    <div className="works-icon">
                        <p>Создание заявки</p>
                        <div className="works-img-container">
                            <img src={create} alt="works-icon"/>
                        </div>
                    </div>
                    <img src={worksArrow} className="works-arrow" alt="works-arrow"/>
                    <div className="works-bottom">
                        <div className="works-icon">
                            <p>Доставка до дома</p>
                            <div className="works-img-container">
                                <img src={home} alt="works-icon"/>
                            </div>
                        </div>
                        <img src={worksArrow} className="works-arrow"  id="left-arrow" alt="works-arrow"/>
                        <div className="works-icon">
                            <p>Сборка заказа</p>
                            <div className="works-img-container">
                                <img src={sborka} alt="works-icon"/>
                            </div>
                        </div>
                        <img src={worksArrow} className="works-arrow"  id="right-arrow" alt="works-arrow"/>
                        <div className="works-icon">
                            <p>Доставка в ПВЗ</p>
                            <div className="works-img-container">
                                <img src={delivery} alt="works-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorks;