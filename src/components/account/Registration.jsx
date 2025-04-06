import React, {useState} from 'react';
import close from "../../assets/images/close.png";

function Registration({ users, setUsers, onToggleForm, closeForm }) {
    const [formData, setFormData] = useState({
        username: '',
        city: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const saveData = () => {
        if (!formData.username || !formData.password) {
            alert("Заполните все обязательные поля!");
            return;
        }

        const userExists = Object.values(users).some(
            user => user.username === formData.username
        );

        if (userExists) {
            alert('Пользователь уже существует!');
            return;
        }

        const newUser = {
            username: formData.username,
            city: formData.city || '',
            password: formData.password
        };

        setUsers(prev => ({ ...prev, [formData.username]: newUser }));
        resetForm();
        alert("Регистрация успешна!");
        onToggleForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveData();
    }

    const resetForm = () => {
        setFormData({
            username: '',
            city: '',
            password: ''
        })
    }

    return (
        <div className="reg-form inner">
            <h1>Регистрация</h1>
            <div className="close-form" onClick={closeForm}>
                <img src={close} alt="close"/>
            </div>
            <div className="input-container">
                <label htmlFor="username">
                    <p>Логин</p>
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                </label>
                <label htmlFor="city">
                    <p>Город</p>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                </label>
                <label htmlFor="password">
                    <p>Пароль</p>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </label>
            </div>
            <div className="confirm">
                <button type="submit" onClick={handleSubmit}>Создать<br/>аккаунт</button>
            </div>
            <div className="change-form change-reg">
                <p onClick={onToggleForm}>Уже есть аккаунт?</p>
            </div>
        </div>
    )
}

export default Registration;