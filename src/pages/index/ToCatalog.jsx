import React from "react";
import {useNavigate} from "react-router-dom";

function ToCatalog() {
    const navigate = useNavigate();
    const toCatalog = () => navigate('/courseWork/catalog');

    return (
        <div className="to-catalog-container">
            <button onClick={toCatalog}>Каталог</button>
        </div>
    )
}

export default ToCatalog;