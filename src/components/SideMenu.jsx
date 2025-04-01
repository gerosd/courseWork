import React from 'react';
import back from '../assets/images/side_menu/back.png';
import contacts from '../assets/images/side_menu/contacts.png';

function SideMenu({isActive, toggleMenu}) {

    return (
        <div className={`menu-fullscreen ${isActive ? "isActivate" : ""}`} onClick={toggleMenu}>
            <div className={`side-menu ${isActive ? "active" : ""}`}>
                <div className="menu-back" onClick={toggleMenu}>
                    <img src={back} alt="back"/>
                </div>

                <div className="menu-main">

                </div>

                <div className="menu-contacts">
                    <img src={contacts} alt="contacts"/>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;