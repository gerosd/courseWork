import React from 'react';
import {useNavigate} from "react-router-dom";

function MainError() {

    const navigate = useNavigate();
    const toCatalog = () => navigate('/courseWork/catalog');

    return (
        <div className="error-inner">
            <h1>Страница не найдена</h1>
            <p>Ошибка 404</p>
            <button className="toCatalog" onClick={toCatalog}>В каталог</button>
        </div>
    )
}

export default MainError;