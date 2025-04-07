import React, {useEffect, useState} from 'react';
import "../../assets/css/howWorks.css";

import close from "../../assets/images/close.png";
import home from "../../assets/images/home.png";

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
        <div className="how-works" onClick={handleContainerClick}>
            <div className="works-inner">
                <div className="close-form" onClick={onClose}>
                    <img src={close} alt="close"/>
                </div>
                <h1>Как мы работаем?</h1>
                <div className="many-icons">
                    <div className="works-icon">
                        <p>Доставка до дома</p>
                        <div className="works-img-container">
                            <img src={home} alt="works-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorks;