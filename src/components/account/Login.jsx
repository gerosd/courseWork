import React, {useState} from 'react';
import close from '../../assets/images/close.png';

function Login({ users, onToggleForm, closeForm }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData( prev => ({ ...prev, [name]: value }));
    }

    const checkData = () => {
        const { username, password } = formData;

        for (let key in users) {
            const user = users[key];
            if (username === user.username && password === user.password) {
                alert('Успешно!');
                setFormData({username: '', password: ''});
                window.sessionStorage.setItem("user", username);
                closeForm();
                return;
            }
        }
        alert('Неверный логин или пароль');
    }

    const handleSave = (e) => {
        e.preventDefault()
        checkData();
    }

    return(
        <form className="login-form inner">
            <h1>Вход</h1>
            <div className="close-form" onClick={closeForm}>
                <img src={close} alt="close"/>
            </div>
            <div className="input-container">
                <label htmlFor="username">
                    <p>Логин</p>
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                </label>
                <label htmlFor="password">
                    <p>Пароль</p>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </label>
            </div>
            <div className="confirm">
                <button type="submit" onClick={handleSave}>Войти</button>
            </div>
            <div className="change-form">
                <p onClick={onToggleForm}>Еще нет аккаунта?</p>
            </div>
        </form>
    )
}

export default Login;