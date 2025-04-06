import React from 'react';
import Fields from "./Fields.jsx";
import '../../assets/css/contacts.css';

function MainContacts() {
    return (
        <div className="main">
            <h1>Наши контакты</h1>
            <p>Продажа товаров в интернет-магазине «PowerVibe» осуществляется ООО «ПауерВайб»</p>
            <Fields />
        </div>
    )
}

export default MainContacts;