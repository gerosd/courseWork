import React from 'react';
import {useNavigate} from "react-router-dom";

import back from '../assets/images/side_menu/back.png';
import contactImg from '../assets/images/side_menu/contacts.png';
import monitorImg from '../assets/images/side_menu/monitor.png';
import gamepadImg from '../assets/images/side_menu/gamepad.png';
import mouseImg from '../assets/images/side_menu/mouse.png';
import headphoneImg from '../assets/images/side_menu/headphones.png';
import keyboardImg from '../assets/images/side_menu/keyboard.png';
import chairImg from '../assets/images/side_menu/chair.png';

function SideMenu({isActive, toggleMenu}) {
    const navigate = useNavigate();

    const contacts = () => {
        navigate('/courseWork/contact');
        toggleMenu();
    }

    const monitors = () => {
        navigate('/courseWork/catalog?type=monitor');
        toggleMenu();
    }

    const gamepads = () => {
        navigate('/courseWork/catalog?type=gamepad');
        toggleMenu();
    }

    const mice = () => {
        navigate('/courseWork/catalog?type=mice');
        toggleMenu();
    }

    const headphones = () => {
        navigate('/courseWork/catalog?type=headphones');
        toggleMenu();
    }

    const keyboards = () => {
        navigate('/courseWork/catalog?type=keyboard');
        toggleMenu();
    }

    const chairs = () => {
        navigate('/courseWork/catalog?type=chair');
        toggleMenu();
    }

    const catalog = () => {
        navigate('/courseWork/catalog');
        toggleMenu();
    }

    return (
        <div className={`side-menu ${isActive ? "active" : ""}`}>
            <div className="menu-back" onClick={toggleMenu}>
                <img src={back} alt="back"/>
            </div>

            <div className="menu-main">
                <p title="Перейти в каталог" onClick={catalog}>Каталог</p>
                <div className="menu-content">
                    <div className="content-element" title="Мониторы" onClick={monitors}>
                        <img src={monitorImg} alt="monitors"/>
                    </div>
                    <div className="content-element" title="Геймпады" onClick={gamepads}>
                        <img src={gamepadImg} alt="gamepads"/>
                    </div>
                    <div className="content-element" title="Компьютерные мыши" onClick={mice}>
                        <img src={mouseImg} alt="mice"/>
                    </div>
                    <div className="content-element" title="Наушники" onClick={headphones}>
                        <img src={headphoneImg} alt="hedphones"/>
                    </div>
                    <div className="content-element" title="Клавиатуры" onClick={keyboards}>
                        <img src={keyboardImg} alt="keyboards"/>
                    </div>
                    <div className="content-element" title="Игровые кресла" onClick={chairs}>
                        <img src={chairImg} alt="chairs"/>
                    </div>
                </div>
            </div>

            <div className="menu-contacts">
                <div className="menu-line"></div>
                <img src={contactImg} alt="contacts" onClick={contacts} />
            </div>
        </div>
    );
}

export default SideMenu;