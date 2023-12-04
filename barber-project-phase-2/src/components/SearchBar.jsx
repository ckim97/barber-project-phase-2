import React from 'react'

function SearchBar() {
    return (
        <div>
            <form>
                <input type="text" placeholder="search for barber" name="search"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;