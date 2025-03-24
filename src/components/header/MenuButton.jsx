import React from 'react';

function MenuButton() {
    return (
        <div className="menu-button" onClick={sideMenu()}>
            <div className="menu-button-rectangle"></div>
            <div className="menu-button-rectangle"></div>
            <div className="menu-button-rectangle"></div>
        </div>
    )
}

function sideMenu() {
}

export default MenuButton;