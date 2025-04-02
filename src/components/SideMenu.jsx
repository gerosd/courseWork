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
        navigate('/contact');
        toggleMenu();
    }

    return (
        <div className={`side-menu ${isActive ? "active" : ""}`}>
            <div className="menu-back" onClick={toggleMenu}>
                <img src={back} alt="back"/>
            </div>

            <div className="menu-main">
                <p>Каталог</p>
                <div className="menu-content">
                    <div className="content-element">
                        <img src={monitorImg} alt="monitors"/>
                    </div>
                    <div className="content-element">
                        <img src={gamepadImg} alt="monitors"/>
                    </div>
                    <div className="content-element">
                        <img src={mouseImg} alt="monitors"/>
                    </div>
                    <div className="content-element">
                        <img src={headphoneImg} alt="monitors"/>
                    </div>
                    <div className="content-element">
                        <img src={keyboardImg} alt="monitors"/>
                    </div>
                    <div className="content-element">
                        <img src={chairImg} alt="monitors"/>
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