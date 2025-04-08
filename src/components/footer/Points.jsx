import React, {useEffect, useState} from 'react';
import '../../assets/css/points.css';
import close from "../../assets/images/close.png";

function Points( {onClose} ) {
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

    return (
        <div className="back-container" onClick={handleContainerClick}>
            <div className="back-inner">
                <div className="close-form" onClick={onClose}>
                    <img src={close} alt="close"/>
                </div>
                <p className="our-points">Наши пункты выдачи</p>
                <p className="yandex">В данный момент доставка осуществляется в пункты выдачи Яндекс Маркета</p>
                <div id="map-container">
                    <iframe className="map"
                        src="https://yandex.ru/map-widget/v1/?display-text=%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82&ll=104.284110%2C54.041413&mode=search&sctx=ZAAAAAgBEAAaKAoSCfJBz2bVeU5AEQiQoWMHa0xAEhIJbqRskbRb%2Fz8REi9P54rS7D8iBgABAgMEBSgKOABA4QFIAWoCcnWdAc3MzD2gAQCoAQC9AbabbYHCAZMBguX3mgXQqZbfoAaLioSJgQeEy7OQ9QLIxorhLu3Xh9KVA%2Bi8iNrSBYnmoqSDBLHf36qbA9nO%2Fb0y5fqbtaMD7ruojYwExMqr0%2BwD9Zb80aIDw6iw57sD79LT0cwD3NuNg5YEpvyV3JoEmLum76sD09idiPoDxPn754MEtIufxp0Dx%2Bfuyu8Dvvby8K4Dt8Hzhu8DggIbKChjaGFpbl9pZDooMTM5NzIyMjgxMTE5KSkpigIAkgIAmgIMZGVza3RvcC1tYXBzqgIMMTM5NzIyMjgxMTE5sAIB&sll=104.284110%2C54.041413&sspn=179.730710%2C66.898730&text=%7B%22text%22%3A%22%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%22139722281119%22%5D%7D%5D%7D&z=3.49"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Points;