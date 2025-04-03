import React, {useState} from 'react';
import close from '../../assets/images/close.png';

function Login({ onToggleForm, closeForm }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [users] = useState({
        admin: {
            username: 'admin',
            password: 'admin',
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData( prev => ({ ...prev, [name]: value }));
    }

    const checkData = () => {
        const { username, password } = formData;

        for (let key in users) {
            const user = users[key];
            if (username === user.name && password === user.password) {
                alert('Успешно!');
                setFormData({username: '', password: ''});
                window.sessionStorage.setItem("user", username);
                return;
            } else {
                alert('Неверный логин или пароль')
            }
        }
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
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
                </label>
                <label htmlFor="password">
                    <p>Пароль</p>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="confirm">
                <button type="submit" onClick={handleSave}>Войти</button>
            </div>
            <div className="change-form">
                <p onClick={onToggleForm}>Зарегистрироваться?</p>
            </div>
        </form>
    )
}

export default Login;