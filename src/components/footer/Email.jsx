import React from "react";
import confirm from "../../assets/images/Confirm-email.png";


function Email() {
    return (
        <div className="email">
            <h1>Подписаться на рассылку</h1>
            <div className="email-input">
                <input type="email" placeholder="Введите email"/>
                <a href="">
                    <img src={confirm} alt="Подтвердить"/>
                </a>
            </div>
            <p className="email-terms">
                Подписываясь на рассылку, Вы соглашаетесь
                c условиями <a href="../../assets/documents/Политика%20конфиденциальности%20PowerVibe.docx" download>политики конфиденциальности</a> и <a href="../../assets/documents/Политика%20обработки%20персональных%20данных%20PowerVibe.docx" download>политики обработки персональных данных</a>
            </p>
        </div>
    )
}

export default Email;