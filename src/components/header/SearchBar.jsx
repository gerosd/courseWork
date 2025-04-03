import React from "react";

import search from "../../assets/images/search.png";

function SearchBar() {
    return (
        <div className="search-bar">
            <label>
                <input type="text" placeholder="Поиск по товарам" />
                <img src={search} alt="search"/>
            </label>
        </div>
    )
}

export default SearchBar