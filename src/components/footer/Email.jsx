import React from "react";
import confirm from "../../assets/images/Confirm-email.png";

function Email() {
    return (
        <div className="email">
            <h1>Подписаться на рассылку</h1>
            <div className="email-input">
                <input type="email" placeholder="Введите email"/>
                <div>
                    <img src={confirm} alt="Подтвердить"/>
                </div>
            </div>
            <p className="email-terms">
                Подписываясь на рассылку, Вы соглашаетесь
                c условиями <a href="">политики конфиденциальности</a> и <a href="">политики обработки персональных данных</a>
            </p>
        </div>
    )
}

export default Email;