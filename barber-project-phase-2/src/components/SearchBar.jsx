import React from 'react'

function SearchBar({search, setSearch}) {

    function handleSearch(e) {
        setSearch(e.target.value);
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="search for barbershop" name="search" value={search} onChange={handleSearch}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;