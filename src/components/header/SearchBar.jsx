import React from "react";

function SearchBar() {
    return (
        <div className="search-bar">
            <label>
                <input type="text" placeholder="Поиск по товарам" />
            </label>
        </div>
    )
}

export default SearchBar