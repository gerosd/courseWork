import React from "react";
import defaultUser from '../../assets/images/default-user.png';

//TODO - сделать сохранение всех полей, фото по нажатию на кнопку.

function MainProfile() {


    return (
        <div className="profile-inner">
            <div className="profile-top">
                <div className="img-input">
                    <div className="img-container">
                        <img src={defaultUser} alt="profile img"/>
                    </div>
                    <input type="file" name="image" accept="image/*"/>
                </div>
                <div className="username">
                <h1>Имя пользователя</h1>
                    <p>Город</p>
                </div>
            </div>
            <div className="profile-fields">
                <label className="profile-input-container" htmlFor="name">
                    <p>Имя</p>
                    <input type="text" name="name"/>
                </label>
                <label className="profile-input-container" htmlFor="surname">
                    <p>Фамилия</p>
                    <input type="text" name="surname"/>
                </label>
                <label className="profile-input-container" htmlFor="email">
                    <p>Email</p>
                    <input type="email" name="email" placeholder="example@example.com"/>
                </label>
                <label className="profile-input-container" htmlFor="tel">
                    <p>Номер телефона</p>
                    <input type="tel" name="tel" placeholder="+7 (XXX) XXX-XX-XX"/>
                </label>
            </div>
            <div className="profile-confirm-button">
                <button>Подтвердить</button>
            </div>
        </div>
    )
}

export default MainProfile;