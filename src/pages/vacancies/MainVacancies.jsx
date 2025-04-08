import React from 'react';
import '../../assets/css/vacancies.css';
import {useNavigate} from "react-router-dom";

function MainVacancies() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    
    return (
        <div className="main-vacancies">
            <h1>На данный момент нет открытых вакансий</h1>
            <button onClick={navigateToHome}>На главную</button>
        </div>
    )
}

export default MainVacancies;