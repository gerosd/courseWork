import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../../assets/scss/footer.scss';
import FooterNav from './FooterNav.jsx';
import Email from './Email.jsx';

import Account from "../account/Account.jsx";
import HowWorks from "./HowWorks.jsx";
import Points from "./Points.jsx";

import file1 from '../../assets/documents/Гарантийные условия PowerVibe.pdf';
import file2 from '../../assets/documents/Положение о товарном кредитовании PowerVibe.pdf';
import file3 from '../../assets/documents/Условия доставки PowerVibe.pdf';
import file4 from '../../assets/documents/Способы оплаты PowerVibe.pdf';
import file5 from '../../assets/documents/Политика конфиденциальности PowerVibe.pdf';
import file6 from '../../assets/documents/Правила продаж PowerVibe.pdf';
import file7 from '../../assets/documents/Рекомендательные технологии PowerVibe.pdf';

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
            navigate('/courseWork/profile');
        } else {
            setShowAccountModal(true)
        }
    }

    const main = () => navigate('/courseWork');
    const catalog = () => navigate('/courseWork/catalog');
    const cart = () => navigate('/courseWork/cart');
    const vacancies = () => navigate('/courseWork/vacancies');
    const contacts = () => navigate('/courseWork/contact');

    const navigation = [
        {name: "Главная", action: main},
        {name: "Каталог", action: catalog},
        {name: "Корзина", action: cart},
        {name: "Профиль", action: handleProfile},
        {name: "Контакты", action: contacts},
    ];
    const forBuyers = [
        {name: "Пункты выдачи заказов", action: handlePoints},
        {name: "Гарантия", file: file1},
        {name: "Кредиты", file: file2},
        {name: "Условия доставки", file: file3},
        {name: "Способы оплаты", file: file4}
    ];
    const company = [
        {name: "Политика конфиденциальности", file: file5},
        {name: "Как мы работаем", action: handleWorks},
        {name: "Правила продаж", file: file6},
        {name: "Рекомендательные технологии", file: file7},
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