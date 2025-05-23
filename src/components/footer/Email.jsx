import React from "react";
import confirm from "../../assets/images/Confirm-email.png";
import {useState} from 'react';

import file1 from '../../assets/documents/Политика конфиденциальности PowerVibe.pdf';
import file2 from '../../assets/documents/Политика обработки персональных данных PowerVibe.pdf';

function Email() {

    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert('Поле email не может быть пустым');
            return;
        }

        if (validateEmail(email)) {
            setEmail('');
            alert('Вы подписались на рассылку!');
        } else {
            alert('Неверный формат почты');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="email">
            <h1>Подписаться на рассылку</h1>
            <div className="email-input">
                <input type="email" placeholder="Введите email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyPress}  />
                <div>
                    <img src={confirm} alt="Подтвердить" onClick={handleSubmit}/>
                </div>
            </div>
            <p className="email-terms">
                Подписываясь на рассылку, Вы соглашаетесь
                c условиями <a href={file1} download>политики
                конфиденциальности</a>
                и <a href={file2} download>политики
                обработки персональных данных</a>
            </p>
        </div>
    )
}

export default Email;