import React from 'react';

function MenuButton ({onClick}) {
    return (
        <div className="menu-button" onClick={onClick}>
            <div className="menu-button-rectangle"></div>
            <div className="menu-button-rectangle"></div>
            <div className="menu-button-rectangle"></div>
        </div>
    )
}

export default MenuButton;