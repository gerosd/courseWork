import React from 'react';
import '../../assets/scss/footer.scss';
import FooterNav from './FooterNav.jsx';
import Email from './Email.jsx';
import {useNavigate} from "react-router-dom";

const howWeWork = () => {
    //логика нажатия
}
/**релизовать функцию для проверки, есть ли логин. Если нет, то открыть div для логина, если есть, то открыть Profile.jsx
 */
const Footer = () => {
    const navigate = useNavigate();

    const profile = () => {
        if (localStorage.getItem('user') !== null) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    }

    const navigation = [
        {name: "Главная", action: navigate('/')},
        {name: "Каталог", action: navigate('/catalog')},
        {name: "Корзина", action: navigate('/cart')},
        {name: "Профиль", action: profile},
        {name: "Контакты", action: navigate('/contacts')},
    ];
    const forBuyers = [
        {name: "Пункты выдачи заказов", },
        {name: "Гарантия", file: "/src/assets/documents/Гарантийные условия PowerVibe.pdf"},
        {name: "Кредиты", file: "/src/assets/documents/Положение о товарном кредитовании PowerVibe.pdf"},
        {name: "Условия доставки", file: "/src/assets/documents/Условия доставки PowerVibe.pdf"},
        {name: "Способы оплаты", file: "/src/assets/documents/Способы оплаты PowerVibe.pdf"}
    ];
    const company = [
        {name: "Политика конфиденциальности", file: "/src/assets/documents/Политика конфиденциальности PowerVibe.pdf"},
        {name: "Как мы работаем", action: howWeWork},
        {name: "Правила продаж", file: "/src/assets/documents/Правила продаж PowerVibe.pdf"},
        {name: "Рекомендательные технологии", file: "/src/assets/documents/Рекомендательные технологии PowerVibe.pdf"},
        {name: "Вакансии", }
    ];

    return (
        <div className="footer">
            <div className="footer-inner">
                <FooterNav header="Навигация по сайту" navigation={navigation} />
                <FooterNav header="Покупателям" navigation={forBuyers} />
                <FooterNav header="Компания" navigation={company} />
                <Email />
            </div>
        </div>
    )
}

export default Footer;