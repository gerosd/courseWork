import React from 'react';
import MenuButton from "./MenuButton.jsx";
import SearchBar from "./SearchBar.jsx";
import Icons from "./Icons.jsx";

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-left">
                    <MenuButton/>
                </div>
                <div className="header-right">
                    <div className="header-right-elements">
                        <p className="name">PowerVibe</p>
                        <SearchBar/>
                        <Icons />
                    </div>
                    <div className="header-bottom"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;