import React from 'react';

function SideMenu({isActive}) {
    return (
        <div className={`side-menu ${isActive ? "isActivate" : ""}`}>

        </div>
    );
}

export default SideMenu;