import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../../assets/scss/footer.scss';
import FooterNav from './FooterNav.jsx';
import Email from './Email.jsx';

import Account from "../account/Account.jsx";
import HowWorks from "./HowWorks.jsx";
import Points from "./Points.jsx";

const Footer = () => {
    const navigate = useNavigate();
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [showWorksModal, setShowWorksModal] = useState(false);
    const [showPointsModal, setShowPointsModal] = useState(false);

    const handleWorks = () => {
        setShowWorksModal(!showWorksModal);
    }

    const handlePoints = () => {
        setShowPointsModal(!showPointsModal);
    }

    const handleProfile = () => {
        if (sessionStorage.getItem('currentUser')) {
            navigate('/profile');
        } else {
            setShowAccountModal(true)
        }
    }

    const main = () => navigate('/');
    const catalog = () => navigate('/catalog');
    const cart = () => navigate('/cart');
    const vacancies = () => navigate('/vacancies');
    const contacts = () => navigate('/contact');

    const navigation = [
        {name: "Главная", action: main},
        {name: "Каталог", action: catalog},
        {name: "Корзина", action: cart},
        {name: "Профиль", action: handleProfile},
        {name: "Контакты", action: contacts},
    ];
    const forBuyers = [
        {name: "Пункты выдачи заказов", action: handlePoints},
        {name: "Гарантия", file: "/src/assets/documents/Гарантийные условия PowerVibe.pdf"},
        {name: "Кредиты", file: "/src/assets/documents/Положение о товарном кредитовании PowerVibe.pdf"},
        {name: "Условия доставки", file: "/src/assets/documents/Условия доставки PowerVibe.pdf"},
        {name: "Способы оплаты", file: "/src/assets/documents/Способы оплаты PowerVibe.pdf"}
    ];
    const company = [
        {name: "Политика конфиденциальности", file: "/src/assets/documents/Политика конфиденциальности PowerVibe.pdf"},
        {name: "Как мы работаем", action: handleWorks},
        {name: "Правила продаж", file: "/src/assets/documents/Правила продаж PowerVibe.pdf"},
        {name: "Рекомендательные технологии", file: "/src/assets/documents/Рекомендательные технологии PowerVibe.pdf"},
        {name: "Вакансии", action: vacancies},
    ];

    return (
        <div className="footer">
            <div className="footer-inner">
                <FooterNav header="Навигация по сайту" navigation={navigation} />
                <FooterNav header="Покупателям" navigation={forBuyers} />
                <FooterNav header="Компания" navigation={company} />
                <Email />
            </div>
            <div className="footer-line"></div>
            <div className="footer-copyright">
                <p>©2025 Компания PowerVibe. Все права защищены.</p>
            </div>
            {showPointsModal && (
                <Points onClose={() => setShowPointsModal(false)}/>
            )}
            {showWorksModal && (
                <HowWorks onClose={() => setShowWorksModal(false)} />
            )}
            {showAccountModal && (
                <Account onClose={() => setShowAccountModal(false)} />
            )}
        </div>
    )
}

export default Footer;