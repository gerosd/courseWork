import React from 'react';
import '../../assets/scss/footer.scss';
import FooterNav from './FooterNav.jsx';
import Email from './Email.jsx';

const navigation = ["Главная", "Каталог", "Корзина", "Профиль", "Контакты"];
const forBuyers = ["Пункты выдачи заказов", "Гарантия", "Кредиты", "Условия доставки", "Способы оплаты"];
const company = ["Политика конфиденциальности", "О компании", "Правила продаж", "Рекомендательные технологии", "Вакансии"];

function Footer() {
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