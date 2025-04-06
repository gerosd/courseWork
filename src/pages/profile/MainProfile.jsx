import React, {useEffect, useState} from "react";
import ImageUploader from "./ImageUploader.jsx";
import {useNavigate} from "react-router-dom";

function MainProfile() {
    const [username, setUsername] = useState("Имя пользователя");
    const [city, setCity] = useState("город");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem('currentUser'));
        const savedUser = userData?.username;
        const savedCity = userData?.city;
        const savedName = sessionStorage.getItem("name");
        const savedSurname = sessionStorage.getItem("surname");
        const savedEmail = sessionStorage.getItem("email");
        const savedPhone = sessionStorage.getItem("phone");

        if (savedUser) {
            setUsername(savedUser);
            setCity(savedCity);
        }

        if (savedName) setName(savedName);
        if (savedSurname) setSurname(savedSurname);
        if(savedEmail) setEmail(savedEmail);
        if (savedPhone) setPhone(savedPhone);
    }, []);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        return /^[\d\s()+-]{10,}$/.test(phone)
    }

    const saveFieldsData = () => {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("surname", surname);
        if (email && validateEmail(email)) {
            sessionStorage.setItem("email", email);
        } else if (email) {
            alert("Введите корректный email")
            return false;
        }
        if (phone && validatePhone(phone)) {
            sessionStorage.setItem("phone", phone);
        } else if (phone) {
            alert("Введите корректный номер телефона");
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(saveFieldsData()) {
            alert("Успешно!");
        }
    }

    const handleExit = () => {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className="profile-inner">
            <div className="profile-top">
                <ImageUploader />
                <div className="username">
                    <h1>{username}</h1>
                    <p>{city}</p>
                </div>
                <div className="exit-container">
                    <button onClick={handleExit}>Выйти</button>
                </div>
            </div>
            <div className="profile-fields">
                <label className="profile-input-container" htmlFor="name">
                    <p>Имя</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"/>
                </label>
                <label className="profile-input-container" htmlFor="surname">
                    <p>Фамилия</p>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} name="surname"/>
                </label>
                <label className="profile-input-container" htmlFor="email">
                    <p>Email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="example@example.com"/>
                </label>
                <label className="profile-input-container" htmlFor="tel">
                    <p>Номер телефона</p>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} name="tel" placeholder="+7 (XXX) XXX-XX-XX"/>
                </label>
            </div>
            <div className="profile-confirm-button">
                <button onClick={handleSubmit}>Подтвердить</button>
            </div>
        </div>
    )
}

export default MainProfile;